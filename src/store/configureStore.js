import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../reducers";
import root from "../sagas/rootSaga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import applyAppStateListener from "redux-enhancer-react-native-appstate";

let store = null;
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authReducer"]
};

const persistedReducer = persistReducer(persistConfig, reducers);
export default () => {
  if (!store) {
    const middlewares = [];
    middlewares.push(sagaMiddleware);
    store = createStore(
      persistedReducer,
      compose(
        applyAppStateListener(),
        applyMiddleware(...middlewares)
      )
    );
    sagaMiddleware.run(root);
  }

  let persistor = persistStore(store);

  return { store, persistor };
};

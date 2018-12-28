import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';

var config = {
    apiKey: "AIzaSyCkEkMJu1XGfBByvtwuF0vmDlRyJAHgzPM",
    authDomain: "studentcrud-db.firebaseapp.com",
    databaseURL: "https://studentcrud-db.firebaseio.com",
    projectId: "studentcrud-db",
    storageBucket: "studentcrud-db.appspot.com",
    messagingSenderId: "62498317081"
};
const firebaseApp = firebase.initializeApp(config);

const rsf = new ReduxSagaFirebase(firebaseApp);

export { firebaseApp };

export default rsf;

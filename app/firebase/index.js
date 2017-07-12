import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyBceVB1TEjugRNo6ndI6kv8P_1a4tgXw2U",
    authDomain: "udemy-todo-app-44068.firebaseapp.com",
    databaseURL: "https://udemy-todo-app-44068.firebaseio.com",
    projectId: "udemy-todo-app-44068",
    storageBucket: "udemy-todo-app-44068.appspot.com",
    messagingSenderId: "331919125159"
  };

  firebase.initializeApp(config);
} catch (e) {
  console.log(e);
}

export const firebaseRef = firebase.database().ref();
export default firebase;

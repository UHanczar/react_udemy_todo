import firebase from 'firebase';

// copying config from firebase site
var config = {
  apiKey: "AIzaSyBceVB1TEjugRNo6ndI6kv8P_1a4tgXw2U",
  authDomain: "udemy-todo-app-44068.firebaseapp.com",
  databaseURL: "https://udemy-todo-app-44068.firebaseio.com",
  projectId: "udemy-todo-app-44068",
  storageBucket: "udemy-todo-app-44068.appspot.com",
  messagingSenderId: "331919125159"
};

// initilising config
firebase.initializeApp(config);
// creating variable for setting database
const firebaseRef = firebase.database().ref();

// setting new database; also set user promises
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Uladzimir',
    age: 32
  }
});
// .then(() => {
//   console.log('Set works');
// }, (err) => {
//   console.log('Set failed');
// });

// if we use set, we rewrite all our database
// firebaseRef.set({
//   appName: 'Todo Application'
// });

// instead, we should use firebaseRef.child...
// firebaseRef.child('user').set({
//   name: 'Taya'
// });

// if we want to update some prop, we should use update
firebaseRef.update({
  isRunning: false
});

// but update can update only first prop in nested objects, others dissapear
// we can fix it by using multiline update: 'app/version': 2.0
// or we can call new firebaseRef.child and update on it
firebaseRef.child('app').update({
  name: 'Todo Application'
}).then(() => {
  console.log('Update completed!');
}, (err) => {
  console.log('Update failed.');
});

// removers all from defined part of data; it user promises too
firebaseRef.child('user/age').remove();
// also we can remove data by simply setting update prop to null
firebaseRef.child('app').update({
  
  version: null
});

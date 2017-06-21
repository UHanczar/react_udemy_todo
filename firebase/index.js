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

// in case we want to fetch all database we use once method
// firebaseRef.once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (err) => {
//   console.log('Unable to fetch value', err);
// });

// 'on' method works on every change of database
// note, we can use logData as callback in 'on' method
const logData = (snapshot) => {
  console.log('Retrieve on on method', snapshot.val());
};

firebaseRef.on('value', logData);

// we can turn off that on method with two ways
// first, we can use mathod off. Using it, we remove all listeners
// firebaseRef.off();
// in case we don't want remove then all, we should assing callback function
// to variable and an pass it to off(callback) as argument
firebaseRef.off();

// ARRAYS
// firebase deals with arrays slightly differently
// it creates objects with unique keys
// here we create new field in our database
const noteRef = firebaseRef.child('notes');
// here we declaer that we add something to newNoteRef
const newNoteRef = noteRef.push();
// here we adding database // also, we can insert object in push
// const newNoteRef = noteRef.push({ text: 'walk the dog' });
newNoteRef.set({
  text: 'walk the dog'
});
// we can fetch our id-s using keys
console.log('Todo key', newNoteRef.key);

// also, we can updata, delete our array items
// let's set new listener, which triggers only when its child updates
// we can do it with special trigger 'child_added'
noteRef.on('child_added', (snapshot) => {
  console.log('Child added', snapshot.key, snapshot.val());
});
// also, we can can change and remove our items with 'child_changed' and
// 'child_removed'
noteRef.on('child_changed', (snapshot) => {
  console.log('Child changed', snapshot.key, snapshot.val());
});

noteRef.on('child_removed', (snapshot) => {
  console.log('Child removed', snapshot.key, snapshot.val());
});

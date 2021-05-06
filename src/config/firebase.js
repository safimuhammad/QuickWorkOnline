// import * as firebase from 'firebase/app';
import firebase from 'firebase/app'

import "firebase/auth";
// import "firebase/auth"
import  "firebase/firestore"
import "firebase/storage"

// var firebase = require('firebase/app')

// var  firebaseConfig = {
//   apiKey: "AIzaSyBZ_6ghoiWR7Sc_lH4dtlG0ZtWie4ix15U",
//   authDomain: "folio-6e20c.firebaseapp.com",
//   projectId: "folio-6e20c",
//   storageBucket: "folio-6e20c.appspot.com",
//   messagingSenderId: "303155260105",
//   appId: "1:303155260105:web:98e59fa7f0242c6e3efb18"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBZ_6ghoiWR7Sc_lH4dtlG0ZtWie4ix15U",
  authDomain: "folio-6e20c.firebaseapp.com",
  projectId: "folio-6e20c",
  storageBucket: "folio-6e20c.appspot.com",
  messagingSenderId: "303155260105",
  appId: "1:303155260105:web:98e59fa7f0242c6e3efb18"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}






const auth = firebase.auth()
const  db = firebase.firestore()
const storage = firebase.storage()



function register(email, password) {
  return auth.createUserWithEmailAndPassword(email, password)


}
function addUserToDb(user) {
  return db.collection('user').add(user)
}

function addProjectToDb(project) {
  return db.collection('project').add(project)
}
function getProject() {
  return new Promise((resolve) => {
    db.collection('project').get().then(snapshot => {
      const project = []
      snapshot.forEach(doc => {
        project.push({ ...doc.data(), id: doc.id })
      })
      resolve(project)
    })
  })
}

function login(email, password) {
  return auth.signInWithEmailAndPassword(email, password)
}
function allUsersData() {
  return new Promise((resolve) => {
    db.collection('user').get().then(snapshot => {
      const user = []
      snapshot.forEach(doc => {
        user.push({ ...doc.data(), id: doc.id })
      })
      resolve(user)
    })
  })
}
function logout() {
  return auth.signOut()
}
export {
    auth,
    register,
    addUserToDb,
    login,
    allUsersData,
    addProjectToDb,
    getProject,
    logout

}
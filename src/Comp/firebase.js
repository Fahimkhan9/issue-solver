import  * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAa0UbA8bhq-JHGil-DWN1Zr0icb9rQ8PI",
    authDomain: "issue-solver-6699b.firebaseapp.com",
    databaseURL: "https://issue-solver-6699b.firebaseio.com",
    projectId: "issue-solver-6699b",
    storageBucket: "issue-solver-6699b.appspot.com",
    messagingSenderId: "696905573772",
    appId: "1:696905573772:web:965fe2c5b73f17d8caa2a9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()
const githubProvider = new firebase.auth.GithubAuthProvider()
  export default db
  export {auth,googleProvider,githubProvider}
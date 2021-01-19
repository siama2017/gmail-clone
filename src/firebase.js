import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCVFvWBOdzovZazKNh4h8Y0SvS2qB7HLKQ",
  authDomain: "clone-f0f75.firebaseapp.com",
  projectId: "clone-f0f75",
  storageBucket: "clone-f0f75.appspot.com",
  messagingSenderId: "976517359653",
  appId: "1:976517359653:web:5847dae24849bcef9277cc",
  measurementId: "G-4FDG5EY41Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // initialize firebase
const db = firebaseApp.firestore(); // this code fetch data from firestore(firebase)
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

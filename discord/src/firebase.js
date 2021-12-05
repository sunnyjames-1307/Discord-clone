import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA54J8ThAbV2KhNuI4mmHTEK16HW-IGNTI",
  authDomain: "discord-clone-37828.firebaseapp.com",
  projectId: "discord-clone-37828",
  storageBucket: "discord-clone-37828.appspot.com",
  messagingSenderId: "201109051356",
  appId: "1:201109051356:web:8c5f8374b00bb4d4abe119",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

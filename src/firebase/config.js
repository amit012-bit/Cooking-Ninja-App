import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC8m3IoSQRuUkjIrN3M8yFfo635HGSLGQo",
  authDomain: "cooking-ninja-site-85130.firebaseapp.com",
  projectId: "cooking-ninja-site-85130",
  storageBucket: "cooking-ninja-site-85130.appspot.com",
  messagingSenderId: "290761238783",
  appId: "1:290761238783:web:442686cad9ce71d4b8c4ca"
};

  //intialize firebase connect with firebase backend
  firebase.initializeApp(firebaseConfig)

  //initialise services and we will use this const to
  // use firebase services in this project thats why 
  //we will export it
  const projectFirestore = firebase.firestore()

  export {projectFirestore}

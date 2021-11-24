import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDjhzKByg84ADQfsfTxWou3lEX5vXfbquE",
    authDomain: "linkedin-clone-yt-3609c.firebaseapp.com",
    projectId: "linkedin-clone-yt-3609c",
    storageBucket: "linkedin-clone-yt-3609c.appspot.com",
    messagingSenderId: "897713703857",
    appId: "1:897713703857:web:128483543353635fd90b90"
  };


  //This special line of code here connects everything
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //gets the firestore database
  const db = firebaseApp.firestore();

  //we want use firebase authentication
  const auth = firebase.auth();

  export { db, auth }
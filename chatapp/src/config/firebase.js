import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCGNvmtMRCJlU6KgSiKK57E--f8RwQ2c1k",
    authDomain: "chat-app-d0758.firebaseapp.com",
    databaseURL: "https://chat-app-d0758.firebaseio.com",
    projectId: "chat-app-d0758",
    storageBucket: "chat-app-d0758.appspot.com",
    messagingSenderId: "428666723490",
    appId: "1:428666723490:web:843c33f04d6a37e8490bfb",
    measurementId: "G-YHS0JLNS45"
}

firebase.initializeApp(firebaseConfig)

export default firebase

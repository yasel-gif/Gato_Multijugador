import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyBdHNrJI4QaDn5P9DicZjGS2jkST0ySk1Y",
    authDomain: "gatomultijugador-f2797.firebaseapp.com",
    databaseURL: "https://gatomultijugador-f2797.firebaseio.com",
    projectId: "gatomultijugador-f2797",
})

let db=firebase.firestore();
//db.settings({timestampsInSnapshots:true});
export default db;
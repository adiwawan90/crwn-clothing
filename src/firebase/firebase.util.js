import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDkkHv_iaQOQ4FrtoWG677AhC3eFYF23rg",
    authDomain: "crwn-db-ff452.firebaseapp.com",
    projectId: "crwn-db-ff452",
    storageBucket: "crwn-db-ff452.appspot.com",
    messagingSenderId: "589021240353",
    appId: "1:589021240353:web:ab0caae3696cb066f21760",
    measurementId: "G-F4M2G1LW6M"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

//   membuatt provider untuk memberikan akses, dgn new Google auth provider class dr authentication library
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signinWithGoogle = () => auth.signInWithPopup(provider)


export default firebase


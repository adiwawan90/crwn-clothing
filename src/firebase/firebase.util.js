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

  // membuat fungsi untuk menyimpan data user
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()

    if (!snapshot.exists) {
      const { displayName, email } = userAuth
      const createdAt = new Date()

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

//   membuatt provider untuk memberikan akses, dgn new Google auth provider class dr authentication library
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signinWithGoogle = () => auth.signInWithPopup(provider)


export default firebase


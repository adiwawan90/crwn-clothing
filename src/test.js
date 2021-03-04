import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore()

firestore.collection('users').doc('3qULFRWbRLiYAdMJIpuC').collection('cartItems').add('gSb90tduyZvzmGzBlQu5')

firestore.doc('/users/3qULFRWbRLiYAdMJIpuC/cartItems/gSb90tduyZvzmGzBlQu5') //ambil doc nya
firestore.collection('/users/3qULFRWbRLiYAdMJIpuC/cartItems') //ambilcollection nya

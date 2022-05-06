import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage'

const config ={
  apiKey: "AIzaSyACqnLxnm6VI61H8OD-XEyNhAoi6k_Le-s",
  authDomain: "prueba-b0259.firebaseapp.com",
  projectId: "prueba-b0259",
  storageBucket: "prueba-b0259.appspot.com",
  messagingSenderId: "374344577567",
  appId: "1:374344577567:web:6703b6e5e1ec8c9f771b2a"
};

	// process.env.NODE_ENV === 'development'
	// 	? JSON.parse('AIzaSyDwfnwmbzGzIqx2y3rP_FppdUrh-6xUAhw')
	// 	: JSON.parse(process.env.VUE_APP_FIREBASE_CONFIG_PUBLIC)

app.initializeApp(config)

export const firebase = app
export const db = app.firestore()

export const storageRef = app.storage().ref()

export const usersRef = db.collection('users')
export const roomsRef = db.collection('chat_rotafono')
export const messagesRef = roomId => roomsRef.doc(roomId).collection('chat')

export const filesRef = storageRef.child('files')

export const dbTimestamp = firebase.firestore.FieldValue.serverTimestamp()
export const deleteDbField = firebase.firestore.FieldValue.delete()

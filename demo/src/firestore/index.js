import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage'

const config ={
  apiKey: "AIzaSyDwfnwmbzGzIqx2y3rP_FppdUrh-6xUAhw",
  authDomain: "festive-avenue-300516.firebaseapp.com",
  databaseURL: "https://festive-avenue-300516-default-rtdb.firebaseio.com",
  projectId: "festive-avenue-300516",
  storageBucket: "festive-avenue-300516.appspot.com",
  messagingSenderId: "14517080523",
  appId: "1:14517080523:web:4bd43b613753ff26e7a64e",
  measurementId: "G-60C41TF6V4"
}

	// process.env.NODE_ENV === 'development'
	// 	? JSON.parse('AIzaSyDwfnwmbzGzIqx2y3rP_FppdUrh-6xUAhw')
	// 	: JSON.parse(process.env.VUE_APP_FIREBASE_CONFIG_PUBLIC)

app.initializeApp(config)

export const firebase = app
export const db = app.firestore()

export const storageRef = app.storage().ref()

export const usersRef = db.collection('users')
export const roomsRef = db.collection('chatRooms')
export const messagesRef = roomId => roomsRef.doc(roomId).collection('messages')

export const filesRef = storageRef.child('files')

export const dbTimestamp = firebase.firestore.FieldValue.serverTimestamp()
export const deleteDbField = firebase.firestore.FieldValue.delete()

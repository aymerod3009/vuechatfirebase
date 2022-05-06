import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage'

const config ={
  apiKey: "AIzaSyCNLhpb8Wh0a7kl1KGbbrrwkNi90CoEJxA",
  authDomain: "av-aprendercreando-dev.firebaseapp.com",
  projectId: "av-aprendercreando-dev",
  storageBucket: "av-aprendercreando-dev.appspot.com",
  messagingSenderId: "772430189483",
  appId: "1:772430189483:web:b41de21ddd753c8233b8ee",
  measurementId: "G-CZLKZN2KQJ"
};

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

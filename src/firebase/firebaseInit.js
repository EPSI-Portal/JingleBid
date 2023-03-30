import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

var config = {
	apiKey: 'AIzaSyAOZPiF8RPGBnJFppoe234nXkAA1AqRJ2E',
	authDomain: 'tribido-236f1.firebaseapp.com',
	databaseURL: 'https://tribido-236f1-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'tribido-236f1',
	storageBucket: 'tribido-236f1.appspot.com',
	messagingSenderId: '854985728785',
	appId: '1:854985728785:web:51e26c75a62e9e762162b0',
	measurementId: 'G-QD8E2SQQKH',
};
const firebaseApp = initializeApp(config);

const db = getFirestore();

const auth = getAuth(firebaseApp);

export {
	firebaseApp as firebase,
	db,
	auth,
};

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';
import 'firebase/firestore';

var config = {
	apiKey: process.env.VUE_APP_API_KEY,
	authDomain: 'tribido-236f1.firebaseapp.com',
	databaseURL:
		'https://tribido-236f1-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'tribido-236f1',
	storageBucket: 'tribido-236f1.appspot.com',
	messagingSenderId: '854985728785',
	appId: process.env.VUE_APP_ID,
	measurementId: process.env.VUE_APP_MEASUREMENT_ID,
};
initializeApp(config);

const db = getFirestore();
export default db;

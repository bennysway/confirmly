import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA3R5LCuLivgFCYuDw-kBGi_c2nDm9wn8U",
  authDomain: "confirmly-73c65.firebaseapp.com",
  databaseURL: "https://confirmly-73c65.firebaseio.com",
  projectId: "confirmly-73c65",
  storageBucket: "confirmly-73c65.appspot.com",
  messagingSenderId: "154381953083",
  appId: "1:154381953083:web:34a57ec4079f0639e2941e",
  measurementId: "G-RRP63GMVKJ"
};
try {
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
} catch(err){
if (!/already exists/.test(err.message)) {
  console.error('Firebase initialization error', err.stack)}
}

const fire = firebase;
export default fire;
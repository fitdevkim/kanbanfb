import firebase from 'firebase';

// Firebase Config
const config = {
  apiKey: 'AIzaSyDPnD_rPSt5FN8VoPoulfgTBIKsmk0sfQk',
  authDomain: 'kanbanfs.firebaseapp.com',
  databaseURL: 'https://kanbanfs.firebaseio.com',
  projectId: 'kanbanfs',
  storageBucket: '',
  messagingSenderId: '797965086351',
  appId: '1:797965086351:web:7da921e9eb09b5ba'
};
// Firebase Init
const db = firebase.initializeApp(config);

export default db.database();

import firebase from 'firebase';

const fire = firebase.initializeApp({
  apiKey: 'AIzaSyCogKIlxdZhndoksUKFJvUcaJ01DbwHCMM',
  authDomain: 'projet2alternance.firebaseapp.com',
  databaseURL: 'https://projet2alternance.firebaseio.com',
  projectId: 'projet2alternance',
  storageBucket: 'projet2alternance.appspot.com',
  messagingSenderId: '663474905671',
});

fire.auth().languageCode = 'fr';

export default fire;

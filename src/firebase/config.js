import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCVMF-UEbshbvOXSfLOVrgkAh6dmf3r8Dc",
    authDomain: "firegram-a7f7d.firebaseapp.com",
    databaseURL: "https://firegram-a7f7d.firebaseio.com",
    projectId: "firegram-a7f7d",
    storageBucket: "firegram-a7f7d.appspot.com",
    messagingSenderId: "855231087077",
    appId: "1:855231087077:web:29eaeea45239e6450a2f0c"
  };

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
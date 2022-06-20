import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBhTpwtrRHovqlMhq18ZTtdBhtAeGELJKM",
    authDomain: "khanakhazana-7d249.firebaseapp.com",
    databaseURL: "https://khanakhazana-7d249-default-rtdb.firebaseio.com",
    projectId: "khanakhazana-7d249",
    storageBucket: "khanakhazana-7d249.appspot.com",
    messagingSenderId: "156912612762",
    appId: "1:156912612762:web:4a00382afb1f4819a73623"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
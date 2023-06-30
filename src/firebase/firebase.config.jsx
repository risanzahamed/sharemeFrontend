import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAP7_7HpaY4TxC47Goi7GB4Vp74OOLvNHI",
    authDomain: "shareme-social-49843.firebaseapp.com",
    projectId: "shareme-social-49843",
    storageBucket: "shareme-social-49843.appspot.com",
    messagingSenderId: "379648134007",
    appId: "1:379648134007:web:c7df1b84c765c6f8056f72"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
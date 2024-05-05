import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyB-epoMkKus5m3KVqY9ZdJr8YiuiS_E0E8",
  authDomain: "blogposts-f3645.firebaseapp.com",
  databaseULR: "https://blogposts-f3645-default-rtdb.firebaseio.com/",
  projectId: "blogposts-f3645",
  storageBucket: "blogposts-f3645.appspot.com",
  messagingSenderId: "460014919059",
  appId: "1:460014919059:web:7f1bb2b6ea520f16f4dc66",
  measurementId: "G-E1HQV2G5ZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export{database}
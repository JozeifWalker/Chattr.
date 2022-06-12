import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail,signOut} from "firebase/auth";
import {getFirestore, query, getDocs, collection, where,addDoc} from "firebase/firestore";



export const firebaseConfig = {
    apiKey: "AIzaSyC9Ss-PGr7oNAqUfJ1SQoth5sDjxEfq1NY",
    authDomain: "chattr-53bef.firebaseapp.com",
    databaseURL: "https://chattr-53bef-default-rtdb.firebaseio.com",
    projectId: "chattr-53bef",
    storageBucket: "chattr-53bef.appspot.com",
    messagingSenderId: "737725476412",
    appId: "1:737725476412:web:6ffa3c3fba363d98f71d39",
    measurementId: "G-21HHSVKLZS"
  };
  
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth=getAuth(app)
 const db=getFirestore(app)

//Authentication with google 
 const googleProvider = new GoogleAuthProvider();
 const signInWithGoogle=async()=>{
  try {
const res=await signInWithPopup(auth,googleProvider);
const user=res.user;
const q= query(collection(db,"users"),where("uid","==",user.uid));
const docs =await getDocs(q);
if(docs.docs.length===0){
  await addDoc(collection(db,"users"),{
    uid:user.uid,
    name:user.displayName,
    authProvider: "google",
    email:user.email
  })
}
  } catch (err) {

    console.error(err)
    alert(err.message)
    
  }
 }

 //authentication with email & password

 const logInWithEmailAndPassword=async(email,password)=>{
  console.log(email,password)
  try {
    await signInWithEmailAndPassword(auth,email,password);
    
  } catch (err) {

    console.error(err);
    alert(err.message);
    
  }
 }
 const registerUser=async(firstname,lastname,email,password)=>{
  try {
    const res=await createUserWithEmailAndPassword(auth,email,password)
    const user=res.user;
    await addDoc(collection(db,"users"),{
      uid:user.uid,
      firstName:firstname,
      lastName:lastname,
      authProvider:"local",
      email
    })
  } catch (err) {
    console.error(err);
    alert(err.message);
    
  }
 }
 //Logout user
 const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerUser,
  logout
};
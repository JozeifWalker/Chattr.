import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail,signOut, FacebookAuthProvider, signInWithRedirect} from "firebase/auth";
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
const res=await signInWithRedirect(auth,googleProvider);
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
 //Authentication with Facebook
 const facebookProvider= new FacebookAuthProvider();
 facebookProvider.addScope('user_birthday')
 const signInWithFacebook=async()=>{
  try {
    const res=await signInWithRedirect(auth,facebookProvider);
    const user=res.user;
    const q= query(collection(db,"users"),where("uid","==",user.uid));
const docs =await getDocs(q);
if(docs.docs.length===0){
  await addDoc(collection(db,"users"),{
    uid:user.uid,
    name:user.displayName,
    authProvider: "facebook",
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

 //Create User Account
 const registerUser=async(name,email,password,role,skills)=>{
  try {
    const res=await createUserWithEmailAndPassword(auth,email,password)
    const user=res.user;
    await addDoc(collection(db,"users"),{
      uid:user.uid,
      name,
      authProvider:"local",
      email,
      role,
      skills
    })
  } catch (err) {
    console.error(err);
    alert(err.message);
    
  }
 }
 //Send Password Reset
 const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
 //Logout user
 const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  signInWithFacebook,
  logInWithEmailAndPassword,
  registerUser,
  sendPasswordReset,
  logout
};
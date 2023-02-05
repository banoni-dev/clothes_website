import { async } from '@firebase/util';
import {initializeApp} from 'firebase/app'
import {getAuth,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDhV0-eRb_37YTMMP9qGmORobL5FqRLXDk",
    authDomain: "clothes-website-4e639.firebaseapp.com",
    projectId: "clothes-website-4e639",
    storageBucket: "clothes-website-4e639.appspot.com",
    messagingSenderId: "592459667077",
    appId: "1:592459667077:web:e34b1a1212323a4d857bec"
  };

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) =>{
  const userDocRef = doc(db,'users',userAuth.uid);
  const userSnapshot  = await getDoc(userDocRef);
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt
      });
    }catch(error){
      console.log("error creating the user : ",error.message)
    }
  }
  return userDocRef;
}

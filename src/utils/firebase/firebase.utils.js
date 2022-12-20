import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCYAYZj9YllM5LrYC0yZt1KsttrxGGFmUg",
    authDomain: "crwn-ztm-1.firebaseapp.com",
    projectId: "crwn-ztm-1",
    storageBucket: "crwn-ztm-1.appspot.com",
    messagingSenderId: "856744177165",
    appId: "1:856744177165:web:65d540386eb8fe18862f44"
  };
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef)

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot)
  console.log(userSnapShot.exists())

  if(!userSnapShot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch(error) {
      console.log('error creating the user', error.message)
    }
  }
  return userDocRef;
}
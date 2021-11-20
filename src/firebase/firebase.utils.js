import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyBiYZDTrS910GEC3SdbvQlLMxdBBWpkYsI",
    authDomain: "crown-db-6b0f9.firebaseapp.com",
    projectId: "crown-db-6b0f9",
    storageBucket: "crown-db-6b0f9.appspot.com",
    messagingSenderId: "146188302133",
    appId: "1:146188302133:web:9fe2269191b0f9507f7e7c",
    measurementId: "G-JCVH6M1MET"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch (error) {
            console.log('Error creting user', error.message);
        }

    }
    return userRef;
}


firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
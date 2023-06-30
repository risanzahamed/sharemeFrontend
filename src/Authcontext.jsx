import { createContext } from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import app from './firebase/firebase.config';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState('');
    const [loader, setLoader] = useState(true);


    const UserlogOut = ()=>{
        localStorage.removeItem('accessToken')
        return signOut(auth)
    }

    const googleLogin = ()=>{
        return signInWithPopup(auth, provider)
    }


    const updateName = (name)=>{
        return updateProfile(auth.currentUser, {displayName: name})
    }

    const updatePhoto = (url)=>{
        return updateProfile(auth.currentUser, {photoURL: url})
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoader(false);
        });

        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user, 
        loader,
        UserlogOut,
        googleLogin,
        updateName,
        updatePhoto
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
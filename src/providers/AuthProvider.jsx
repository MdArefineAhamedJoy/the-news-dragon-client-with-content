import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [lodging , setLodging] = useState(true)
    

    const createUser = (email, password) =>{
        setLodging(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const singIn = (email , password) =>{
        setLodging(true)
        return signInWithEmailAndPassword(auth ,email,password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , loggingUser =>{
            setUser(loggingUser)
            setLodging(false)

        })
        return () =>{
            setLodging(true)
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        lodging ,
        createUser,
        singIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
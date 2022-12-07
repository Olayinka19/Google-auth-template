// import {auth} from '../Firebase'
// import { useContext, createContext, useEffect ,useState} from "react";
// import { GoogleAuthProvider, signInWithPopup , signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
// const AuthContext = createContext();
// import {auth} from '../firebase'

// export const AuthContextProvider = ({children}) => {
//     const [user, setUser] = useState({})
//     const googleSignIn = () => {
//         const provider = new GoogleAuthProvider();
//         signInWithPopup(auth, provider)
//     };
//     useEffect(()=> {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser)
//         });
//         return () => {
//             unsubscribe()
//         }
//     })
//     return (
//         <AuthContext.Provider value={{googleSignIn}}>
//         {children}
//         </AuthContext.Provider>
//     )
// }
// export const UserAuth = () => {
//     return useContext(AuthContext)
// }

// =<=========================================>

import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../Firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    // signInWithRedirect(auth, provider)
  };

  const logOut = () => {
      signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('User', currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
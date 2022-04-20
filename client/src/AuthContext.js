import React, { useContext , useEffect ,useState } from 'react'
import { auth } from "./Firebase"
import firebase from "firebase/compat/app";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  return auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}

export function AuthProvider({ children }) {
    
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);


    function signUp(email, password){
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function logIn(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logOut() {
        return auth.signOut();
    }

    useEffect(() => {
        const unmount = auth.onAuthStateChanged(user => { setUser(user); setLoading(false);})
        return unmount;
    } , [])
    
    let value = {
        user,
        signUp,
        logIn,
        logOut,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}
import { useEffect, useState } from "react";
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuth from "../Firebse/firebase.init";

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);

    //to fix reloading problem 
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    /*const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }*/

    //----------function to login using email and pass--------------
    const signInUsingEmailAndPass = (email, pass) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    }

    //-----------func to create user using email and pass-------------
    const createUser = (name, email, pass) => {
        createUserWithEmailAndPassword(auth, email, pass)
        .then(result => {
          //setting user name
          const newUser = {email, displayName: name};
          setUser(newUser);

          //save user to the database
          saveUser(name, email);

          //send user name to firebase
          updateProfile(auth.currentUser, {
            displayName: name
            })
            .then( () => {

            })
            .catch( (error) => {

            });

          setError('SignUp complete, please go to LogIn page and LogIn'); //if signup successful then set setError as empty string
          
          logOut();
        })
        .catch(error => {
          setError(error.message);
        })
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            setUser({});
        })
        .finally(()=>setIsLoading(false));
    }

    //observer
    useEffect(()=> {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
                setError('');
            }else {
                setUser({})
            }
            setIsLoading(false);
        });
        return ()=>unsubscribed;
    }, [auth]);

    //useEffect to find if an user is admin or not
    useEffect( () => {
        fetch(`https://polar-earth-13486.herokuapp.com/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin));

    }, [user.email]);

    //save user into database
    const saveUser = (displayName, email) => {
        const user = {email, displayName};
        fetch('https://polar-earth-13486.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    return {
        user,
        logOut,
        isLoading,
        signInUsingEmailAndPass,
        createUser,
        error,
        setError,
        admin
    }
}

export default useFirebase;
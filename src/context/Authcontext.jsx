import React from 'react'
import { createContext } from 'react';
import {  useContext, useEffect, useState } from 'react';

const AuthProvider = createContext();

export default function Authcontext({ children }) {
    let [user, setUser] = useState(null);
    let [loading, setLoading] = useState(false);

    useEffect(() => {
        let storeduser = localStorage.getItem('userdata');
        if (storeduser) {
            setUser(JSON.parse(storeduser));
        } 
        setLoading(false);
    }, []);

    function Login(formuser) {
        setUser(formuser);
        localStorage.setItem('userdata', JSON.stringify(formuser));
    }

    function Logout() {
        setUser(null);
        localStorage.removeItem('userdata');
    }
         
  return (
   <AuthProvider.Provider value={{ user, loading, Login, Logout }}>
     {children}
   </AuthProvider.Provider>
  )
}

//crear un hook para usar el contexto
export function useAuth() {
    return useContext(AuthProvider);
}

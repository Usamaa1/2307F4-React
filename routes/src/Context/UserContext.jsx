import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';

export const AuthContext = createContext();

export const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);



     const profile = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/api/v1/profile',{withCredentials: true})
            setUser(data)

            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        profile();
    },[])



    const login = async (loginData) => {

        try {
            const { data } = await axios.post('http://localhost:3000/api/v1/login', loginData, {
                withCredentials: true
            })
            profile();

            console.log('User Login')
        } catch (error) {
            console.log(error)
        }

    }


    const register = async (registerData) => {
        try {
            const { data } = await axios.post('http://localhost:3000/api/v1/register', registerData)

            console.log('User Registered')
        } catch (error) {
            console.log(error)
        }
    }

   



    return (
        <AuthContext.Provider value={{ login, register, profile, user }}>
            {children}
        </AuthContext.Provider>
    )
}



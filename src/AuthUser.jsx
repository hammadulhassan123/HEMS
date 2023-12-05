import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function AuthUser() {

    const navigate = useNavigate();
    // Getting token
    const getToken= ()=>{
        const tokenString = localStorage.getItem("token");
        const userToken = JSON.parse(tokenString);
        return userToken;
    }
    
    // // Getting user
    // const getUser= ()=>{
    //     const userString = sessionStorage.getItem('user');
    //     const user_detail = JSON.parse(userString);
    //     return user_detail;
    // }

    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        if (userString) {
            return JSON.parse(userString);
        }
        return null; // Or any default value you prefer
    }

    const [token, setToken]= useState(getToken());
    const [user, setUser]= useState(getUser());
    
    // Setting token into the localStorage
    const saveToken= (user,token) =>{
        sessionStorage.setItem('token',JSON.stringify(token));
        sessionStorage.setItem('user',JSON.stringify(user));
        setToken(token);
        setUser(user);
        navigate("/userhome");
    }
    
    const http= axios.create({
        baseURL:"http://localhost:8000/api",
        headers:{
            "Content-Type": "application/json",
        }
    });
    
    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        http
    }
}

import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function AuthUser() {

    // In this file I have placed my base url and then I had done get token&user then set them, into the local/seesion storage and also done logout() functionality

    const navigate = useNavigate();
    // Getting token
    const getToken= ()=>{
        const tokenString =  localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    };
    
    // Getting user
    const getUser= ()=>{
        const userString =  localStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;
    };

    const [token, setToken]= useState(getToken());
    const [user, setUser]= useState(getUser());
    
    // Setting token into the localStorage
    const saveToken= (user,token) =>{
        localStorage.setItem('token',JSON.stringify(token));
        localStorage.setItem('user',JSON.stringify(user));

        setToken(token);
        setUser(user);
        navigate("/userhome");
    }
    
    const logout = ()=>{
        localStorage.clear();
        navigate("/");
        console.log("Logout success");
    }

    const http= axios.create({
        baseURL:"http://localhost:8000/api",
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            redirect:"follow",
        }
    });
    
    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        http,
        logout,        
    }
}

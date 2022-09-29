import moment from 'moment/moment';
import React from 'react'
import { useState,useEffect } from 'react';
import { useCookies } from 'react-cookie'
import { useLocation, useNavigate } from 'react-router-dom'
import profileHandler from '../controllers/profileHandler'

const AuthTokenHandler = () => {
  const navigate = useNavigate()
  const [cookies, setCookie] = useCookies(['token'])
  const search = useLocation().search;
  const [user, setUser] = useState()
  useEffect(() => {
    if(cookies.token) navigate('/')
    const token= new URLSearchParams(search).get('token')
    console.log(token)
    const expiresOn = new Date(moment().add(1, "days").format())
    console.log(expiresOn)
    setCookie("token", token, {path:"/", expires:expiresOn})
    const getUser = async()=>{
      const user= await profileHandler()
      setUser(user)
    }
    getUser()
  }, [])
  if(user && user.isGithubUsername) navigate('/')
  return (
    <>
      {user? user.username:""}
    <a href="https://github.com/login/oauth/authorize?client_id=ce1a21d8b45d47f95615" style={{color:'white'}}>Login in using github</a>
    </>
  )
}

export default AuthTokenHandler
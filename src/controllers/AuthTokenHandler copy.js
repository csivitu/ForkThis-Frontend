import axios from 'axios';
import moment from 'moment/moment';
import React from 'react'
import { useEffect } from 'react';
import { useCookies } from 'react-cookie'
import { useLocation, useNavigate } from 'react-router-dom'
import postHandler from '../reqHandlers/postHandler';

const AuthTokenHandler2 = () => {
  const navigate = useNavigate()
  const [cookie] = useCookies(['cookie'])
  useEffect(() => {
    console.log(cookie.githubUsername)
    console.log(cookie.githubUsername)
    const res=postHandler('http://127.0.0.1:8000/users/gitUsername',{
      "githubUsername":cookie.githubUsername
    })
    navigate('/')
  }, [])
  return (
    <>
    <a href="https://github.com/login/oauth/authorize">Ho gaya bhai</a>
    </>
  )
}

export default AuthTokenHandler2
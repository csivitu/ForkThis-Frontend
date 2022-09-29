import moment from 'moment/moment';
import React from 'react'
import { useEffect } from 'react';
import { useCookies } from 'react-cookie'
import { useLocation, useNavigate } from 'react-router-dom'

const AuthTokenHandler = () => {
  const navigate = useNavigate()
  const [cookies, setCookie] = useCookies(['token'])
  const search = useLocation().search;
  useEffect(() => {
    const token= new URLSearchParams(search).get('token')
    console.log(token)
    const expiresOn = new Date(moment().add(1, "days").format())
    console.log(expiresOn)
    setCookie("token", token, {path:"/", expires:expiresOn})
    return navigate('/')
  }, [])
  return (
    <></>
  )
}

export default AuthTokenHandler
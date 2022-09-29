import moment from 'moment/moment';
import React from 'react'
import { useLocation, redirect } from 'react-router-dom'

const authTokenHandler = () => {
    const search = useLocation().search;
    const token= new URLSearchParams(search).get('token')
    console.log(token)
    const expiresOn = moment().add(1, "days").format()
    document.cookie=`token=${token}; expires=${expiresOn}`
    redirect("/")
  return (
    <div>authTokenHandler</div>
  )
}

export default authTokenHandler
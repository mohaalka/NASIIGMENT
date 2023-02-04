import React from 'react'
import {Navigate} from 'react-router-dom'

export default function Protected({children}) {

    const email= localStorage.getItem("email")
  return (
    email ? children : <Navigate to={'/login'} replace />
  )
}

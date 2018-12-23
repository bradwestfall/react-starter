import React from 'react'
import { Link } from 'react-router-dom'

const UnauthorizedLayout = () => {
  return (
    <div>
      <Link to="/dashboard">Login</Link>
    </div>
  )
}

export default UnauthorizedLayout

import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  )
}

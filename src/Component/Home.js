import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <div>Home</div>
<Link to="/about">About</Link>
<Link to="/Signup">Sign Up</Link>
    
    </>
  )
}

export default Home
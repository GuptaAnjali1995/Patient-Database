import React from 'react'
import { AuthConsumer } from './AuthContext'

const Landing = () => (
  <AuthConsumer>
  {({ isAuthor, login, logout }) => (

<div className="container">
<h2> Connecting Dots with context API    {isAuthor}</h2>

</div>
)}
  </AuthConsumer>
    )


export default Landing

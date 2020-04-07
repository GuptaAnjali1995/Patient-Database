import React from 'react'
import { AuthConsumer } from './AuthContext'
const Dashboard = () => (

  <AuthConsumer>
      {({ isAuthor, login, logout }) => (
    
  <div className="container">
    <h2>c c c Dashboard  {isAuthor}</h2>
  </div>
)}
      </AuthConsumer>
        )
export default Dashboard

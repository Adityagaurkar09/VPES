import React, { useState } from 'react'
import './Signup.css'

function Signup() {
    const [signupData, setSignupData] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    })
    SubmitEvent = (e) => {
        e.preventDefault()
        console.log(signupData)
    }
  return (
    <div className='signup-container'>
      <h1>Signup</h1>
      <div className='signup'>
        <div className='signup-form'>
            <label>Name</label>
            <input type='text' placeholder='Enter your name' className='signup-input' value={signupData.name}
            onChange={(e) => setSignupData({...signupData,name: e.target.value})}/>
        </div>
        <div className='signup-form'>
            <label>Email</label>
            <input type='text' placeholder='Enter your email' className='signup-input' value={signupData.email}
            onChange={(e) => setSignupData({...signupData,email: e.target.value})}/>
        </div>
        <div className='signup-form'>
            <label>Phone</label>
            <input type='text' placeholder='Enter your phone' className='signup-input' value={signupData.phone}
            onChange={(e) => setSignupData({...signupData,phone: e.target.value})}/>
        </div>
        <div className='signup-form'>
            <label>Password</label>
            <input type='text' placeholder='Enter your password' className='signup-input' value={signupData.password}
            onChange={(e) => setSignupData({...signupData,password: e.target.value})}/>
        </div>
        <button type='button' className='signup-button' onClick={SubmitEvent}>Signup</button>
      </div>
    </div>
  )
}

export default Signup

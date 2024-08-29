import React from 'react'
import './signup.css'
import PICTURE from '../../assets/Icons/Group 353.png'

const Signup = () => {
  return (
    <div>
        <h4 className='signup-header'>Create a free Jobbero Account</h4>
        <p className='job-seeker'>Job seeker</p>
        <div className='container'>
         <form action="" id="signupForm" className='form'>
            <div >
                <input className='input-field' type="text" id="inputFirstName" placeholder="First name" ></input>
            </div>
            <div>
                <input className='input-field'  type="text" id="inputLastName" placeholder="Last name"></input>
            </div>

            <div>
                <input className='input-field'  type="email" id="inputEmail" placeholder="email address" required></input>
            </div>

            <div>
                <input className='input-field'  type="password" id="inputPassword" placeholder="password" required></input>
            </div>

            <div>
                <input className='input-field'  type="password" id="inputPassword" placeholder="confirm password" required></input>
            </div>

            <div>
                <select className='input-field' >
                    <option>Role</option>
                </select>
             </div>
             <div className='ReCaptcha-box'>
                <p className='ReCaptcha'>ReCaptcha</p>
                <p className='ReCaptcha-terms'>Privacy-Terms</p>
             </div>
        </form>
        <img className='signup-img' src={PICTURE} alt=''/>
    </div>
</div>
  )
}

export default Signup
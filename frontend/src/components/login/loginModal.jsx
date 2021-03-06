import React from 'react';
import '../../css/navigation/loginSignupModal.css';

export const LoginModal = ({ isOpen }) => {
  return(
    <>
      {isOpen ?
        <div className='login_signup_modal_container'>
          <form className='login_modal'>

            <input
              className='login_signup_input'
              type='text'
              placeholder='Username'
              />
            <br />

            <input
              className='login_signup_input'
              type='text'
              placeholder='Password'
              />
            <br />

            <input
              className='login_signup_submit'
              type='submit'
              value='Log In'
              />


          </form>
        </div>
        : null }
    </>
  )
};

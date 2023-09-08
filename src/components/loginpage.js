import { Label } from '@mui/icons-material';
import { color } from '@mui/system';
import React from 'react';
import { Form } from 'react-router-dom';


function loginPage() {
  return (
    <>
    <div className='container'>
      <h1 className='sign'>Sign In</h1><br></br>
    <br></br>
      
      <form  onsubmit="validateform()">

    <input className='input' name="name" id="name" type="text" placeholder="Email" /><br></br>
    <br></br>
    <input className='input' name="name" id="name" type="text" placeholder="Password" /><br></br>
    <br></br>
    <button className='submit' type="submit">Sign In</button><br></br>
    <br></br>
    <span className='labels' >Don't have an account?</span> <a href='#'>  Sign Up</a>
      </form>
      
      
    </div>
    </>
  );
}

export default loginPage;
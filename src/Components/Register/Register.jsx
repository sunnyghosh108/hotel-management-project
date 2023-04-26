import React, { useState } from 'react';
import './Register.css'
import{ createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth'; import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';


const auth =getAuth(app);

const Register = () => {
   const [error,setError]= useState('');

   const [success,setSuccess]=useState('');
    
   const handleSubmit=(event)=>{
         //1.prevent page refresh
          event.preventDefault();
          setSuccess('');
          setError('');
          //2.collect from data
          const email=event.target.email.value;
          const password=event.target.password.value;
          const name=event.target.name.value;
           console.log(name,email,password)
           //validate
           if(!/(?=.*[A-Z])/.test(password)){
            setError('please add at least one uppercase');
            return;
           }
           else if(!/(?=.*[0-9].*[0-9])/.test(password)){
            setError('please add at least two numbers')
            return;
           }
            else if(password.length<6){
              setError('please add at least 6 characters in your password ')
              return;

            } 


           //3. create user in firebase
           createUserWithEmailAndPassword(auth,email,password)
          .then(result =>{
            const loggedUer=result.user;
            console.log(loggedUer);
            setError('');
            event.target.reset();
            setSuccess('Welcome to grand Hotel')
            sendVerificationEmail(result.user);
            updateUserData(result.user,name)
          })
          .catch(error=>{
            console.error(error);
            setError(error.message)
            
          })
   }


   const sendVerificationEmail=(user)=>{
    sendEmailVerification(user)
    .then(result=>{
      console.log(result)
      alert('please verify your email address')
    })
     
   }

   const updateUserData=(user,name)=>{
       updateProfile(user,{
        displayName:name
       })
       .then(()=>{
        console.log('user name updated')
       })
       .catch(error=>{
        setError(error.message)
       })
   }



    const handleEmailChange=(event)=>{
        console.log(event.target.value)
        // setEmail(event.target.value);
       
    }
    const handlePasswordBlur=(event)=>{
        console.log(event.target.value);
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Register</h2>
            <form onSubmit={handleSubmit}>
              {/* //2 */}
              <input className='w-50 rounded ps-2 mb-4' type="text" name="name" id="name" placeholder="Your name" required></input><br/>

                <input className='w-50 rounded ps-2   mb-4' onChange={handleEmailChange} type="email" name="email" id="email" placeholder="Your email" required/><br/>
                <input className='w-50 rounded ps-2 mb-4' onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder="Your password" required></input><br/>
                

              <input className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p><small>Already have an account? please <Link to="/login">Login</Link></small></p>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Register;
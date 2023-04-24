import React, { useRef, useState } from 'react';
import{ createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'; import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';
const auth =getAuth(app);

const Login = () => {
    const [error,setError]= useState('');

   const [success,setSuccess]=useState('');
   const emailRef=useRef();
    
   const handleSubmit=(event)=>{
         //1.prevent page refresh
          event.preventDefault();
          setSuccess('');
          setError('');
          //2.collect from data
          const email=event.target.email.value;
          const password=event.target.password.value;
           console.log(email,password)
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
            setSuccess('User has been created successfully')
          })
          .catch(error=>{
            console.error(error);
            setError(error.message)
            
          })
   }
    const handleEmailChange=(event)=>{
        console.log(event.target.value)
        // setEmail(event.target.value);
       
    }
    const handlePasswordBlur=(event)=>{
        console.log(event.target.value);

        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
          const loggedUser=result.user;
          console.log(loggedUser);
          setSuccess('user login successful.')
          setError('');
          
        })
        .catch(error=>{
            setError(error.message);

        })
    }

    const handleResetPassword = event=>{
     const email=emailRef.current.value;
     if(!email){
     alert('please provide your email address to reset password')
     return;
    }
    sendPasswordResetEmail(auth,email)
    .then(()=>{
        alert('please check your email')
    })
    .catch(error=>{
        console.log(error);
        setError(error.message)
    })
    }


    return (
        <div className='w-50 mx-auto'>
            <h2>Please Login</h2>
            <form onSubmit={handleSubmit}>
                <input className='w-50 rounded ps-2   mb-4' onChange={handleEmailChange} type="email" name="email" ref={emailRef} id="email" placeholder="Your email" required/><br/>
                <input className='w-50 rounded ps-2 mb-4' onBlur={handlePasswordBlur} type="text" name="password" id="password" placeholder="Your password" required></input><br/>
                

              <input className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p><small>Forget password? please<button onClick={handleResetPassword} className='btn btn-link'>Reset Password</button></small></p>
            <p className='text-danger'><small>New to this website? please<Link to="/register">Register</Link></small></p>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Login;
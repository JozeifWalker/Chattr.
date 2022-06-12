import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './register.scss';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { FcGoogle } from 'react-icons/fc';
import Stack from 'react-bootstrap/Stack';
import Logo from '../../components/logo/logo';

import { useAuthState } from "react-firebase-hooks/auth";
import {auth,registerUser,signInWithGoogle} from '../../config';

export default function Register() {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
  const [match,setMatch]=useState(false)
	const [ confirmPassword, setConfirmPassword ] = useState('');
  const [passwordValidation,setPasswordValidation]=useState(false);
  const navigate=useNavigate();

  const [user, loading, error] = useAuthState(auth);

  const register=(event)=>{
    event.preventDefault()
    if(password===confirmPassword){
      registerUser(name,email,password)
    }
  }
  useEffect(()=>{
    if(loading)return;
    if(user)navigate('/dashboard');
    let passwordRequirements=new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
    
    if(password===confirmPassword&&password.length!==0){
      setMatch(true)
    }else{
      setMatch(false)
    }
    if(passwordRequirements.test(password)){
      setPasswordValidation(true)
    }else{
      setPasswordValidation(false)
    }
  },[user,loading,password,confirmPassword])
	return (
		<React.Fragment>
			<div className="register-container">
				<Card id={'signInContainer'}>
					<Form>
						<Stack gap={4}>
							<Logo />
							<h3>Create Account</h3>
							<FloatingLabel label="Name">
								<Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} required />
							</FloatingLabel>
							<FloatingLabel label="Email">
								<Form.Control type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} required />
							</FloatingLabel>
            
							<FloatingLabel label="Password">
								<Form.Control isValid={passwordValidation?true:false} isInvalid={!passwordValidation&&password.length!==0?true:false}  type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} required />
                <Form.Control.Feedback type={'invalid'}>Password must contain one uppercase letter,one lower case letter, one digit, one special character, and at least 8 characters in length. </Form.Control.Feedback>
							</FloatingLabel>
             
							<FloatingLabel label="Confirm Password">
								<Form.Control disabled={passwordValidation?false:true} isValid={match?true:false} isInvalid={!match&&confirmPassword.length!==0?true:false} type="password" placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)} required />
                <Form.Control.Feedback type={'invalid'}>Passwords do not match.</Form.Control.Feedback>
                <Form.Control.Feedback>Passwords Match</Form.Control.Feedback>
							</FloatingLabel>
							<Stack className="col-md-5 mx-auto vstack gap-2">
								<Button id={'create-acct'} disabled={match&&name.length!==0&&password.length!==0&&email.length!==0?false:true} onClick={(event)=>register(event)}>Create Account</Button>
								<Form.Text style={{ alignSelf: 'center' }}>
									Already have an account? <Link to="/login">Sign In</Link>
								</Form.Text>
								<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
									<div style={{ width: '100%', padding: '0rem 1rem' }}>
										<hr />
									</div>
									<span>or</span>
									<div style={{ width: '100%', padding: '0rem 1rem' }}>
										<hr />
									</div>
								</div>
								
									<Button onClick={signInWithGoogle} variant={'outline-primary'} id={'create-acct-google'}>
										Continue with <FcGoogle size={20} />
									</Button>
							
							</Stack>
						</Stack>
					</Form>
				</Card>
			</div>
		</React.Fragment>
	);
}

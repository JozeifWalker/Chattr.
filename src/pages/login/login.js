import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { FcGoogle } from 'react-icons/fc';
import {BsArrowRight} from 'react-icons/bs';
import Logo from '../../components/logo/logo';
import './login.scss';

import { Link, useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../../config';
import { useAuthState } from 'react-firebase-hooks/auth';

const Login = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const [ user, loading, error ] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(
		() => {
			// if (loading) {
			//     // maybe trigger a loading screen
			//     return;
			if (user) navigate('/dashboard');
		},
		[ user, loading ]
	);

	return (
		<React.Fragment>
			<div className="login-container">
				
				<Card id={'login-card'}>
                    <Logo/>
					<Form id={'login-form'}>
						<Form.Group>
							<FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
								<Form.Control type="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)} />
							</FloatingLabel>
							<FloatingLabel controlId="floatingPassword" label="Password">
								<Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
							</FloatingLabel>
                            <Form.Text>
								<Link to="/">Forgot Password?</Link>
							</Form.Text>
						</Form.Group>
						<Form.Group id={'button-group'}>
							<Button id={'login-button'} onClick={() => logInWithEmailAndPassword(email, password)}>
								Login
							</Button>
						</Form.Group>
                       
                        <hr />
					<Button variant={'outline-primary'} id={'login-google-btn'}  onClick={signInWithGoogle}><FcGoogle size={30}/></Button>
					</Form>
					
				</Card>
			</div>
		</React.Fragment>
	);
};
export default Login;

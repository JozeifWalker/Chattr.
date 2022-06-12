import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { FcGoogle } from 'react-icons/fc';
import Stack from 'react-bootstrap/Stack';
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
				<Card id={'signInContainer'}>
					<Form>
						<Stack gap={4}>
							<Logo />
							<h3>Log In Using Email</h3>

							<FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
								<Form.Control
									type="email"
									placeholder="name@example.com"
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</FloatingLabel>
							<FloatingLabel controlId="floatingPassword" label="Password">
								<Form.Control
									type="password"
									placeholder="Password"
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</FloatingLabel>
							<Form.Text>
								<Link to="/">Forgot Password?</Link>
							</Form.Text>

							<Stack className="col-md-5 mx-auto" style={{ marginTop: '3rem' }} gap={2}>
								<Button disabled={email.length===0||password.length===0?true:false} id={'login-button'} onClick={() => logInWithEmailAndPassword(email, password)}>
									Log In
								</Button>
								<Form.Text style={{ alignSelf: 'center' }}>
									Dont have an account? <Link to="/signup">Create An Account</Link>
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
								<Button variant={'outline-primary'} id={'login-google-btn'} onClick={signInWithGoogle}>
									Log In With <FcGoogle size={20} />
								</Button>
							</Stack>
						</Stack>
					</Form>
				</Card>
			</div>
		</React.Fragment>
	);
};
export default Login;

import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import './reset.scss';

import { auth, sendPasswordReset } from '../../config';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Logo from '../../components/logo/logo';
import Stack from 'react-bootstrap/esm/Stack';

export default function Reset() {
	const [ email, setEmail ] = useState('');
	const [ user, loading, error ] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(
		() => {
			if (loading) return;
			if (user) navigate('/dashboard');
		},
		[ user, loading ]
	);
    const resetPassword=()=>{
       sendPasswordReset(email)
        navigate('/login')
    }

	return (
		<React.Fragment>
            <div className='reset-container'>
			<Card id={'reset'}>
                <Stack gap={4}>
                    <Logo/>
                <Card.Title>Reset Password</Card.Title>
				<FloatingLabel label="Email">
					<Form.Control
						type="email"
						placeholder="name@email.com"
						onChange={(e) => setEmail(e.target.value)}
						required
                        isValid={email.length!==0?true:false}
					/>
				</FloatingLabel>
                <Button onClick={()=>resetPassword(email)} id={'reset-button'}>Send Password Reset</Button>
                </Stack>
			</Card>
            </div>
		</React.Fragment>
	);
}

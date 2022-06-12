import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Logo from '../../components/logo/logo';
import './landing.scss';
import Stack from 'react-bootstrap/esm/Stack';

const Landing = () => {
	return (
		<React.Fragment>
			<div className="landing-container">
				<Container fluid id="landing-contents">
					<Stack style={{alignItems:'center',justifyContent:'center'}} gap={5}>
					<Logo />
                    <h3>Taking collaboration & teamwork to the next level.</h3>
                    <Button href="/login" id={'signIn'}>Sign In</Button>
                    <hr style={{backgroundColor:'white',width:'50%',margin:'2rem 0rem'}}></hr>
                    <p>Dont have an account ? <Link to="/signup">Create one.</Link></p>
					</Stack>
                    
				</Container>
			</div>
		</React.Fragment>
	);
};
export default Landing;

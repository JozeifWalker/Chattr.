import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import './landing.scss';

const Landing = () => {
	return (
		<React.Fragment>
			<div className="landing-container">
				<Container fluid id="landing-contents">
					<h1 id='site-title'>Chattr.</h1>
                    <h3>Taking collaboration & teamwork to the next level.</h3>
                    <Button href="/login" id={'signIn'}>Sign In</Button>
                    <hr style={{backgroundColor:'white',width:'50%',margin:'2rem 0rem'}}></hr>
                    <p>Dont have an account ? <Link to="/">Create one.</Link></p>
                    
				</Container>
			</div>
		</React.Fragment>
	);
};
export default Landing;

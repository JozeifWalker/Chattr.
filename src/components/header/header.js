import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';

export default function Header(props) {
	return (
		<div className="header-container">
			<Navbar style={{background:'#1B065E',padding:'1rem'}} expand="xl">
				<Container fluid>
					<Navbar.Brand style={{color:'white',letterSpacing:'3px'}} href="/">Chattr.</Navbar.Brand>
					{props.page==='register'?'':<Button variant={'outline-light'} href="/signup">Create Account</Button>}

				</Container>
			</Navbar>
		</div>
	);
}



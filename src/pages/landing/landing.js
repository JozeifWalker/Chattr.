import React from 'react';
import Button from 'react-bootstrap/Button';
import './landing.scss';
import Stack from 'react-bootstrap/esm/Stack';
import Header from '../../components/header/header';
import Card from 'react-bootstrap/Card';

import { BsImage,BsSearch } from 'react-icons/bs';
import {MdGTranslate} from 'react-icons/md'
const Landing = () => {
	return (
		<React.Fragment>
			<Header />
			<div className="landing-container">
				<Stack
					id="contents"
					style={{ alignItems: 'stretch', justifyContent: 'center', padding: '2rem 1rem' }}
					gap={0}
				>
					<Stack gap={5} id={'hero-title'}>
					<h1> A simple , modern app designed to connect students to gain experience through collaboration & innovation. </h1>
					<Button id={'signin'} href="/login" variant={'outline-light'}>
						Sign In
					</Button>
					</Stack>
					<Stack
					direction="horizontal"
					id={'landing-points-container'}
					style={{
						alignItems: 'center',
						justifyContent: 'flex-start',
						flexWrap: 'wrap',
						padding: '1rem 1rem',
						minHeight: '20vh',
						background: '#666A86',
						color: '#F4F4F9'
					}}
					gap={0}
				>
					<Card id={'landing-points'} border="light">
						<Card.Body>
							<Card.Title>
								<BsImage /> Add Attachments
							</Card.Title>
							<Card.Text>
								Attach important documents, photos, and more from your device. Send them to colleagues to promote rapid development.
							</Card.Text>
						</Card.Body>
					</Card>
					<Card  id={'landing-points'} border="light">
						<Card.Body>
							<Card.Title><MdGTranslate/> Translate Text</Card.Title>
							<Card.Text>
								Translate your messages, overcome language barriers, and collaborate with anyone anywhere.
							</Card.Text>
						</Card.Body>
					</Card>
					<Card  id={'landing-points'}  border="light">
						<Card.Body>
							<Card.Title><BsSearch/> Find Your Team</Card.Title>
							<Card.Text>
								Need a designer, developer, and devops ? Collaborate with students near and far, and begin cross functional projects.
							</Card.Text>
						</Card.Body>
					</Card>
				</Stack>
				</Stack>
			
			</div>
		</React.Fragment>
	);
};
export default Landing;

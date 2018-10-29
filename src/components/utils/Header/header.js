import React from 'react';
import Container from '../grid/container/Container';


const Header = () => (
    <div className='header'>
        <Container>
            <img className='aboutImage' src={require('../../../images/aboutImage.png')} alt='about' height='400px' width='380px'/>
            <h1 className='greeting'>Hello!</h1>
            <h4 className='greeting-content'>My name is Will Miller. I am excited to meet you!</h4>
        </Container>
    </div>
);

export default Header;
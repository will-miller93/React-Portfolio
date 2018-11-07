import React, { Component } from 'react';
import './Main.css';
// component imports here.
import NavBar from '../../utils/Navbar/navbar';
import Header from '../../utils/Header/header';
import Container from '../../utils/grid/container/Container';
import Row from '../../utils/grid/row/Row';
import Col from '../../utils/grid/col/Col';
// import Card from '../../utils/card/card';


class Portfolio extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <Header height='500px' width='100%' />
                <div className='parallax-container'>
                    <div className='parallax'>
                        <img src={require('../../../images/aurora.jpg')} alt='parallaximg'/>
                    </div>
                </div>
                {/* this is where the first whitespace will go */}
                <div className="section white">
                    <div className="row container">
                        <h2 className="aboutHeader"> About Me! </h2>
                         <p className="grey-text text-darken-3 lighten-3"> heres where all of the about field text will go. there are three paragraphs so ill need three p tags.</p>
                         <p className="grey-text text-darken-3 lightne-3"> Here is the second paragraph of the about section.</p>
                         <p className="grey-text text-darken-3 lightne-3"> Here is the third paragraph of the about section.</p>
                    </div>
                </div>
                {/* extra room for readability */}
                <div className='parallax-container'>
                    <div className='parallax'>
                        <img src={require('../../../images/4kAurora.jpg')} alt='parallaximg'/>
                    </div>
                </div>
                {/* this is where the next whitespace will go */}
                <div className="section white">
                    <div className="row container">
                        <h2 className="aboutHeader"> Gallery </h2>
                        <Container>
                            <Row>
                                <Col size='md-6'>
                                    {/* <Card src={require('../../../images/300x300PlaceHolder.png')} /> */}
                                    <img className='parallaxImages' src={require('../../../images/ZigRigResized.png')} alt='placeholder' />
                                    <img className='parallaxImages' src={require('../../../images/300x300PlaceHolder.png')} alt='placeholder' />
                                </Col>
                            </Row>
                            <Row>
                                <Col size='md-6'>
                                    <img className='parallaxImages' src={require('../../../images/300x300PlaceHolder.png')} alt='placeholder' />
                                    <img className='parallaxImages' src={require('../../../images/300x300PlaceHolder.png')} alt='placeholder' />
                                </Col>
                            </Row>
                            <Row>
                                <Col size='md-6'>
                                    <img className='parallaxImages' src={require('../../../images/zeldaClickyGameResized.png')} alt='placeholder' />
                                    <img className='parallaxImages' src={require('../../../images/manchesterHangManResized.png')} alt='placeholder' />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                {/* extra room for readability */}
                <div className='parallax-container'>
                    <div className='parallax'>
                        <img src={require('../../../images/secondAurora.jpg')} alt='parallaximg'/>
                    </div>
                </div>
                {/* this is where the third and final whitespace will go */}
                <div className="section white">
                    <div className="row container">
                        <h2 className="aboutHeader"> Technologies </h2>
                         <p className="grey-text text-darken-3 lighten-3"> heres where all of the about field text will go. there are three paragraphs so ill need three p tags.</p>
                         <p className="grey-text text-darken-3 lightne-3"> Here is the second paragraph of the about section.</p>
                         <p className="grey-text text-darken-3 lightne-3"> Here is the third paragraph of the about section.</p>
                    </div>
                </div>
                {/* extra room for readability */}
                {/* then the footer will go here. */}
                {/* extra room for readability */}
            </div>
        );
    }
}

export default Portfolio;
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
                <div className="section">
                    <div className="row container">
                        <h2 className="aboutHeader"> About Me! </h2>
                         <p className="white-text text-darken-3 lighten-3"> heres where all of the about field text will go. there are three paragraphs so ill need three p tags.</p>
                         <p className="white-text text-darken-3 lightne-3"> Here is the second paragraph of the about section.</p>
                         <p className="white-text text-darken-3 lightne-3"> Here is the third paragraph of the about section.</p>
                    </div>
                </div>
                {/* extra room for readability */}
                <div className='parallax-container'>
                    <div className='parallax'>
                        <img src={require('../../../images/4kAurora.jpg')} alt='parallaximg'/>
                    </div>
                </div>
                {/* this is where the next whitespace will go */}
                <div className="section">
                    <div className="row container">
                        <h2 className="aboutHeader"> Gallery </h2>
                        <Container>
                            <Row>
                                <Col size='m6'>
                                    {/* <Card src={require('../../../images/300x300PlaceHolder.png')} /> */}
                                    {/* <img className='parallaxImages' src={require('../../../images/ZigRigResized.png')} alt='placeholder' />  */}
                                    {/* <img className='parallaxImages' src={require('../../../images/CoffeeFinder.png')} alt='placeholder' /> */}
                                    <div className="card medium">
                                        <div className="card-image">
                                            <img src={require('../../../images/ZigRigResized.png')} alt="CoffeeFinder" />
                                            {/* <span className="card-title">Coffee Finder</span> */}
                                        </div>
                                        <div className="card-content">
                                            <p>Zig Rig is a Full Stack React web application that makes the task of balancing generators in the field much simpler. The web app even allows for PDF downloads to be able to share with an entire team.</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="https://pure-taiga-14555.herokuapp.com/">Check It Out!</a>
                                        </div>
                                    </div>
                                </Col>
                                <Col size='m6'>
                                    <div className="card medium">
                                        <div className="card-image">
                                            <img src={require('../../../images/CoffeeFinder.png')} alt="CoffeeFinder" />
                                            {/* <span className="card-title">Coffee Finder</span> */}
                                        </div>
                                        <div className="card-content">
                                            <p>Coffee Finder is a fullstack web application that utilizes the google maps and geocoding APIs to allow users to be able to find specialty coffee shops in their area.</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="https://pure-taiga-14555.herokuapp.com/">Check It Out!</a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col size='m6'>
                                    {/* <img className='parallaxImages' src={require('../../../images/googleMapsResized.png')} alt='placeholder' /> */}
                                    {/* <img className='parallaxImages' src={require('../../../images/TreeViewResized.png')} alt='placeholder' /> */}
                                    <div className="card medium">
                                        <div className="card-image">
                                            <img src={require('../../../images/googleMapsResized.png')} alt="CoffeeFinder" />
                                            {/* <span className="card-title">Coffee Finder</span> */}
                                        </div>
                                        <div className="card-content">
                                            <p>Coffee Finder is a fullstack web application that utilizes the google maps and geocoding APIs to allow users to be able to find specialty coffee shops in their area.</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="https://pure-taiga-14555.herokuapp.com/">Check It Out!</a>
                                        </div>
                                    </div>
                                </Col>
                                <Col size='m6'>
                                    <div className="card medium">
                                        <div className="card-image">
                                            <img src={require('../../../images/TreeViewResized.png')} alt="CoffeeFinder" />
                                            {/* <span className="card-title">Coffee Finder</span> */}
                                        </div>
                                        <div className="card-content">
                                            <p>Coffee Finder is a fullstack web application that utilizes the google maps and geocoding APIs to allow users to be able to find specialty coffee shops in their area.</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="https://pure-taiga-14555.herokuapp.com/">Check It Out!</a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col size='m6'>
                                    {/* <img className='parallaxImages' src={require('../../../images/zeldaClickyGameResized.png')} alt='placeholder' /> */}
                                    {/* <img className='parallaxImages' src={require('../../../images/manchesterHangManResized.png')} alt='placeholder' /> */}
                                    <div className="card medium">
                                        <div className="card-image">
                                            <img src={require('../../../images/zeldaClickyGameResized.png')} alt="CoffeeFinder" />
                                        </div>
                                        <div className="card-content">
                                            <p>Coffee Finder is a fullstack web application that utilizes the google maps and geocoding APIs to allow users to be able to find specialty coffee shops in their area.</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="https://pure-taiga-14555.herokuapp.com/">Check It Out!</a>
                                        </div>
                                    </div>
                                </Col>
                                <Col size='m6'>
                                    <div className="card medium">
                                        <div className="card-image">
                                            <img src={require('../../../images/manchesterHangManResized.png')} alt="CoffeeFinder" />
                                        </div>
                                        <div className="card-content">
                                            <p>Coffee Finder is a fullstack web application that utilizes the google maps and geocoding APIs to allow users to be able to find specialty coffee shops in their area.</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="">Check It Out!</a>
                                        </div>
                                    </div>
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
                <div className="section">
                    <div className="row container">
                        <h2 className="aboutHeader"> Technologies </h2>
                         <p className="white-text text-darken-3 lighten-3"> heres where all of the about field text will go. there are three paragraphs so ill need three p tags.</p>
                         <p className="white-text text-darken-3 lightne-3"> Here is the second paragraph of the about section.</p>
                         <p className="white-text text-darken-3 lightne-3"> Here is the third paragraph of the about section.</p>
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
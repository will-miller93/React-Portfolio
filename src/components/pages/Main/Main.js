import React, { Component } from 'react';
import './Main.css';
// component imports here.
import NavBar from '../../utils/Navbar/navbar';
import Header from '../../utils/Header/header';
import Container from '../../utils/grid/container/Container';
import Row from '../../utils/grid/row/Row';
import Col from '../../utils/grid/col/Col';


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
                         <p className="white-text text-darken-3 lighten-3 about"> My name is Will Miller, I am a full-stack web-developer focused on clean, content-focused design and functionality. I love the simple things in life, like an artfully brewed cup of coffee, disc-golf with friends, a sunny day to attend an Atlanta Braves game and the way good clean code looks. Web Development is more than just a career for me but a passion. It's something that fuels my desire to solve problems and continuously learn new things.</p>
                         <p className="white-text text-darken-3 lighten-3 about"> I graduated from the Campbell School of Business at Berry College with a Bachelors of Science in Marketing in 2015. During the years following my graduation I was able to pursue my dream of working in the Specialty Coffee Industry in multiple amazing shops all over Georgia. My work in the Specialty Coffee Industry has given me and incredible attention to detail and a love for things that are carefully and artfully crafted.</p>
                         <p className="white-text text-darken-3 lighten-3 about"> At the beginning of 2018, I left the Specialty Coffee Industry and entered into the Full Stack Flex Web Development program at The Georgia Institute of Technology. It was during this course that I found my passion for programming and developing incredible applications and websites.</p>
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
                                    <div className="card medium z-depth-5">
                                        <div className="card-image">
                                            <img src={require('../../../images/ZigRigResized.png')} alt="CoffeeFinder" />
                                        </div>
                                        <div className="card-content">
                                            <p>Zig Rig is a Full Stack React web application that makes the task of balancing generators in the field much simpler. The web app even allows for PDF downloads to be able to share with an entire team.</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="https://pickled-malamute-15436.herokuapp.com/">Check It Out!</a>
                                        </div>
                                    </div>
                                </Col>
                                <Col size='m6'>
                                    <div className="card medium z-depth-5">
                                        <div className="card-image">
                                            <img src={require('../../../images/CoffeeFinder.png')} alt="CoffeeFinder" />
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
                                    <div className="card medium z-depth-5pwd
                                    ">
                                        <div className="card-image">
                                            <img src={require('../../../images/googleMapsResized.png')} alt="CoffeeFinder" />
                                        </div>
                                        <div className="card-content">
                                            <p>A lightweight visualization of randomly generated coordinates using the Google Maps API</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="https://will-miller93.github.io/Coordinate-Map/">Check It Out!</a>
                                        </div>
                                    </div>
                                </Col>
                                <Col size='m6'>
                                    <div className="card medium z-depth-5pwd
                                    ">
                                        <div className="card-image">
                                            <img src={require('../../../images/TreeViewResized.png')} alt="CoffeeFinder" />
                                        </div>
                                        <div className="card-content">
                                            <p>Simple Tree View React web application utilizing web sockets to update in real time.</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="https://calm-brushlands-97195.herokuapp.com/">Check It Out!</a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col size='m6'>
                                    <div className="card medium z-depth-5pwd
                                    ">
                                        <div className="card-image">
                                            <img src={require('../../../images/zeldaClickyGameResized.png')} alt="CoffeeFinder" />
                                        </div>
                                        <div className="card-content">
                                            <p>The Legend of Zelda Clicky Game is a solid first attempt at a fully funtional React Application</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="https://will-miller93.github.io/Clicky-Game-React/">Check It Out!</a>
                                        </div>
                                    </div>
                                </Col>
                                <Col size='m6'>
                                    <div className="card medium z-depth-5pwd
                                    ">
                                        <div className="card-image">
                                            <img src={require('../../../images/manchesterHangManResized.png')} alt="CoffeeFinder" />
                                        </div>
                                        <div className="card-content">
                                            <p>A Lightweight web based Hangman game focused around the Atlanta based band Manchester Orchestra</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="https://will-miller93.github.io/Manchester_Orchestra_Hangman_game/">Check It Out!</a>
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
                        <br/>
                        <h3>Front End</h3>
                        <hr/>
                        <img alt='htmlImg'/>
                        <img alt='cssImg'/>
                        <img alt='handlebarsImg'/>
                        <img alt='ReactImg'/>
                        <img alt='jsxImg'/>
                    </div>
                    <div className="row container">
                        <br/>
                        <h3>Back End</h3>
                        <hr/>
                        <img alt='nodeImg'/>
                        <img alt='expressImg'/>
                        <img alt='javascriptImg'/>
                        <img alt='jQueryImg'/>
                        <img alt='mySqlImg'/>
                        <img alt='mongoImg'/>
                    </div>
                    <div className="row container">
                        <br/>
                        <h3>Technologies</h3>
                        <hr/>
                        <img alt='sequelizeImg'/>
                        <img alt='Socket.ioImg'/>
                        <img alt='sequelize'/>
                        <img alt='bootstrapImg'/>
                        <img alt='materializeImg'/>
                        <img alt='npmImg'/>

                    </div>
                    <div className="row container">
                        <br/>
                        <h3>Tools</h3>
                        <hr/>
                        <img alt='sqlProImg'/>
                        <img alt='robo3tImg'/>
                        <img alt='vscodeImg'/>
                        <img alt='herokuImg'/>
                        <img alt='gitHubImg'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
import React, { Component } from 'react';
import './Main.css';
// component imports here.
import NavBar from '../../utils/Navbar/navbar';
import Header from '../../utils/Header/header';


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
                        <h2 className="aboutHeader"> About Me! </h2>
                         <p className="grey-text text-darken-3 lighten-3"> heres where all of the about field text will go. there are three paragraphs so ill need three p tags.</p>
                         <p className="grey-text text-darken-3 lightne-3"> Here is the second paragraph of the about section.</p>
                         <p className="grey-text text-darken-3 lightne-3"> Here is the third paragraph of the about section.</p>
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
                        <h2 className="aboutHeader"> About Me! </h2>
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
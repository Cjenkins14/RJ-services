import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css'


class NavBar extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
    };

    goBack = () => {
        this.props.history.goBack()
    };


    myFunction = () => {
        let x = this.myRef.current;
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    };

    render() {
        return (
            <div className="topnav" id="myTopnav" ref={this.myRef}>
                <Link to="/">Home</Link>
                <Link to="/services" >Services</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/testimony">Testimonials</Link>
                <Link to='/contact'>Contact</Link>
                <button className="hamburger-button" onClick={this.myFunction}>
                    <i className="fa fa-bars"></i>
                    <span className='hidden-button'>Menu</span>
                </button>
            </div>
        )
    }
};

export default NavBar;
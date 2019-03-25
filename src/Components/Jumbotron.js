import React, { Component } from 'react';
import './../App.css';
import { Jumbotron, Button, Container } from 'reactstrap';

class Header extends Component {
render() {
return (
    <Jumbotron fluid className="relative">
    <img className='bg' src="../bg.png"/>
    <div className="overlay-text">
        <h1 className="display-perso">My Tech World</h1>
        <p className="lead mb-large">10 weeks to change my life</p>
        <p className="lead">8 Fullstack projects to learn how to code</p>
        <Button color="secondary">Discover my projects</Button>
    </div>
    </Jumbotron>
    )
}
}

export default Header;

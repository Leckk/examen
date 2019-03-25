import React from 'react';
import './../App.css';
import { connect } from 'react-redux'
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavbarGlobal extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false
        };
    }
    toggle() {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
        <div>
            <Navbar color="white" light expand="md">
            <NavbarBrand href="/">My Tech World</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/">The Projects</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/like">TOP 3</NavLink>
                </NavItem>
                
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        );
    }
}
function mapStateToProps(state) {
    return { isLiked: state.isLiked }
}

export default connect(
    mapStateToProps,
    null
)(NavbarGlobal);
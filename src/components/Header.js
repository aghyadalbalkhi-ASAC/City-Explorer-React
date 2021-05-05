import React, { Component } from 'react'
import {Navbar } from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
        <div className="row row-header">
            <div className="col-12">
                <Navbar className="justify-content-center" expand="lg" id="nav" sticky="top">
                    <Navbar.Brand id="text-color"  href="#">City Explorer App</Navbar.Brand>
                </Navbar>
            </div>
        </div>
        )
    }
}

export default Header

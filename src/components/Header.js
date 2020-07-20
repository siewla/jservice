import React, { Component } from 'react'
import {MDBNavbar, MDBNavbarBrand } from "mdbreact";

export class Header extends Component {
    render() {
        return (
            <div>
                <MDBNavbar className="justify-content-center" color="black" dark expand="md">
                    <MDBNavbarBrand>
                        Welcome to <strong>Jeopardy</strong>
                    </MDBNavbarBrand>
                </MDBNavbar>
            </div>
        )
    }
}

export default Header

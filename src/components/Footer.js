import React, { Component } from 'react'
import { MDBContainer, MDBFooter } from "mdbreact";

export class Footer extends Component {
    render() {
        return (
            <div>
                <MDBFooter color="black fixed-bottom">
                    <MDBContainer fluid className="text-center">
                    &copy; {new Date().getFullYear()} Built and Designed by <a href="https://github.com/siewla/react_groceries"> SiewLa </a>
                    </MDBContainer>
                </MDBFooter>
            </div>
        )
    }
}

export default Footer

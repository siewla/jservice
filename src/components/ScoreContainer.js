import React, { Component } from 'react'
import { MDBBtn } from "mdbreact"

export class ScoreContainer extends Component {

    render() {
        return (
            <div className="score-container">
                <h1>Score: <strong>{this.props.score}</strong></h1>
                <MDBBtn color="danger" onClick={this.props.handleDecrease}>Decrease</MDBBtn>
                <MDBBtn color="primary" onClick={this.props.handleIncrease}>Increase</MDBBtn>
                <MDBBtn outline color="dark" onClick={this.props.handleReset}>Reset</MDBBtn>
            </div>
        )
    }
}

export default ScoreContainer

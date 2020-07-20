import React, { Component } from 'react'
import ScoreContainer from './ScoreContainer';
import QuestionContainer from './QuestionContainer';
import { MDBBtn } from "mdbreact"

export class MainContent extends Component {
    constructor (props){
        super(props)
        this.state ={
            score: 0,
            question: null,
            baseURL: "https://jservice.io/api/random"
        }
    }

    fetchQuestion = async () =>{
        try {
            const response = await fetch (this.state.baseURL)
            const result = await response.json()
            this.setState({
                question: result
            })
        }catch (error) {
            console.log(error)
        }
        // console.log(this.state.question)
    }

    handleDecrease = () => {
        let currentScore = this.state.score
        this.setState({
            score: currentScore -1            
        })
    }

    handleIncrease = () => {
        let currentScore = this.state.score
        this.setState({
            score: currentScore +1            
        })
    }

    handleReset = () =>{
        this.setState({
            score:0
        })
    }

    

    render() {
        return (
            <div className="main-content">
                <ScoreContainer 
                    score = {this.state.score}
                    handleDecrease = {this.handleDecrease}
                    handleIncrease = {this.handleIncrease}
                    handleReset = {this.handleReset}
                />
                <h1>Let's Play!</h1>
                <MDBBtn color="success" onClick={this.fetchQuestion}>Get Question</MDBBtn>
                <QuestionContainer question ={this.state.question} />
            </div>
        )
    }
}

export default MainContent

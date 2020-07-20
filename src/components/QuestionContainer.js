import React, { Component } from 'react'
import { MDBBtn } from "mdbreact"

export class QuestionContainer extends Component {
    constructor (props){
        super (props)
        this.state = {
            toggleAnswerRevealed: true
        }
    }

    handleAnswer = () => {
        this.setState({toggleAnswerRevealed:! this.state.toggleAnswerRevealed})
    }
    
    render() {
        console.log(this.props.question)
        if (this.props.question !==null){
            return (
                <div className="question-container">
                    <h2>Category: <strong>{this.props.question[0].category.title}</strong></h2>
                    <h2>Points: <strong>{this.props.question[0].value}</strong></h2>
                    <h2>Question: <strong>{this.props.question[0].question}</strong></h2>
                    <MDBBtn color="info" onClick = {this.handleAnswer}> 
                        {this.state.toggleAnswerRevealed ?'Click to Reveal Answer' : 'Click to Hide Answer'}
                    </MDBBtn>
                    {this.state.toggleAnswerRevealed ? '':
                        <h2>Answer: <strong>{this.props.question[0].answer}</strong></h2>
                    }
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Click to Get Question </h3>
                </div>
            )
        }
        
    }
}

export default QuestionContainer

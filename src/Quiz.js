import React, { Component } from 'react';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor() {
        super(props);

        this.state = {
            quiz_position: 1
        };
    }

    render() {
        return (
            <div>
                <div className="QuizQuestion">
                    {quizData[this.state.quiz_position].instruction_text}
                </div>
            </div>
        )
    }
}
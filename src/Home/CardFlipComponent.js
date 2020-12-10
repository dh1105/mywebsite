import React, { Component } from 'react'
import {
    Card, CardBody
} from 'reactstrap';
import "./FlipCardStyle.css"

class CardFlip extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        }
    }

    flip = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    }

    render() {
        return (
            <div className="flip-card">
                <Card className="flip-card-inner">
                    <CardBody className="flip-card-front">
                        {this.props.icon}
                        <p>{this.props.text}</p>
                    </CardBody>
                    <CardBody className="flip-card-back">
                        {this.props.backText}
                    </CardBody>
                </Card>
            </div>
        )
    }

}

export default CardFlip
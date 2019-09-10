import ReactCardFlip from 'react-card-flip';
import React, { Component } from 'react'
import {
    Card, CardBody
} from 'reactstrap';

const FlippyStyle = {
    width: '130px',
    height: '130px',
    textAlign: 'center',
    fontFamily: "Raleway",
    justifyContent: 'center',
    color: '#FFF'
}

class CardFlip extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        }
    }

    flipBack = () => {
        if (this.state.isFlipped) {
            return
        }
        this.setState({
            isFlipped: true
        })
    }

    flipForward = () => {
        if (!this.state.isFlipped) {
            return
        }
        this.setState({
            isFlipped: false
        })
    }

    render() {
        return (
            <ReactCardFlip containerStyle={FlippyStyle} isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <Card key="front"
                    style={{
                        backgroundColor: '#57a0d3',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '5px',
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        fontSize: '85%',
                    }} onMouseEnter={this.flipBack}>
                    {/* This is the front of the card.
              <button onClick={this.handleClick}>Click to flip</button> */}
                    <CardBody style={{ height: '100%', width: '100%', marginTop: '10px' }}>
                        {this.props.icon}
                        <p>{this.props.text}</p>
                    </CardBody>
                </Card>

                <Card key="back" style={{
                    backgroundColor: '#57a0d3',
                    borderRadius: '5px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    fontSize: '100%'
                }} onMouseLeave={this.flipForward}>
                    <CardBody style={{ height: '100%', width: '100%' }}>
                        {this.props.backText}
                    </CardBody>
                </Card>
            </ReactCardFlip>
        )
    }

}

export default CardFlip
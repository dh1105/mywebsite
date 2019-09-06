import React, { Component } from 'react'

class Image extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <a target="_blank" rel="noopener noreferrer" href={this.props.link}>
                    <img src={this.props.img} style={{ height: '90%', width: '90%', WebkitBorderRadius: '50%', justifyContent: 'center' }} alt={this.props.alt} />
                </a>
            </div>
        )
    }
}

export default Image
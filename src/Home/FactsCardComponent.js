import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap';

class FactsCard extends Component {

    render() {
        return (
            <Card style={{ width: '80%' }}>
                <CardBody>
                    {this.props.icon}
                    {this.props.fact}
                </CardBody>
            </Card>
        )
    }
}

export default FactsCard
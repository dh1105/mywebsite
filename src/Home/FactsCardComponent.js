import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap';

class FactsCard extends Component {

    render() {
        return (
            <Card style={{ width: '80%', height: 'auto' }}>
                <CardBody>
                    <div>
                        {this.props.icon}
                    </div>
                    <div style={{marginTop: '30px'}}>
                        {this.props.fact}
                    </div>
                </CardBody>
            </Card>
        )
    }
}

export default FactsCard
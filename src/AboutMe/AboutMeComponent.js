import React, { Component } from 'react'
import Header from '../HeaderComponent'
import Footer from '../FooterComponent'
import { Card, CardBody } from 'reactstrap'

class AboutMe extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="col-auto">
                        {/* <h1 style={{marginTop: '10px'}}>Hello, welcome to my website!</h1> */}
                        <Card style={{ width: '100%', marginTop: '100px', marginBottom: '50px' }}>
                            <CardBody>
                                <h2 style={{marginTop: '10px', marginBottom: '30px', fontFamily: "Open Sans"}}>About me</h2>
                                <hr />
                                <p style={{ fontFamily: "Montserrat" }}>A little bit about me</p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default AboutMe;
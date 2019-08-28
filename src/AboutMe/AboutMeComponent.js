import React, { Component } from 'react'
import Header from '../HeaderComponent'
import Footer from '../FooterComponent'
import { Card, CardBody } from 'reactstrap'

class AboutMe extends Component {

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="col-auto">
                        {/* <h1 style={{marginTop: '10px'}}>Hello, welcome to my website!</h1> */}
                        <Card style={{ width: '100%', marginTop: '100px', marginBottom: '30px' }}>
                            <CardBody>
                                <h2 style={{ marginTop: '10px', marginBottom: '20px', fontFamily: "Raleway" }}><b>About me</b></h2>
                                <p style={{ fontFamily: "Raleway", fontWeight: "300" }}>A little bit about me</p>
                                <hr />
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
import React, { Component } from 'react'
import Header from '../HeaderComponent'
import Footer from '../FooterComponent'
import { Jumbotron } from 'reactstrap'

class AboutMe extends Component {

    render() {
        return (
            <div>
                <Header />
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-auto">
                                <h1 style={{ marginTop: '10px' }}>A bit about me</h1>
                            </div>
                        </div>
                        <hr />
                    </div>
                </Jumbotron>
                <Footer />
            </div>
        )
    }
}

export default AboutMe;
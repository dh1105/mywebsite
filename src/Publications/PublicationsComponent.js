import React, { Component } from 'react'
import Header from '../HeaderComponent'
import Footer from '../FooterComponent'
import { Card, CardBody } from 'reactstrap';


class Publications extends Component {

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="col-auto">
                        <Card style={{ width: '100%', marginTop: '100px', marginBottom: '30px' }}>
                            <CardBody>
                                <h2 style={{ marginTop: '10px', marginBottom: '20px', fontFamily: "Raleway", fontWeight: "400" }}><b>Publications</b></h2>
                                <hr />
                                <ol style={{ paddingLeft: "15px", fontFamily: "Source Sans Pro" }}>
                                    <li style={{marginBottom: "10px"}}>
                                        Dhruv Verma and Muralikrishna SN (2020, July 2-4) 
                                        <b> 'Semantic similarity between short paragraphs using Deep Learning'</b> - 
                                        Paper accepted at the 6th IEEE International Conference on Electronics, Computing and Communication Technologies 2020, 
                                        Bangalore, India.
                                    </li>
                                    <li>
                                        Dr Srikanth Prabhu, Dhruv Verma, Dr Sunaina Puri and Dr Komal Smriti (2018, November 2-4)
                                        <b> 'Anomaly detection in a panoramic dental X-rays using machine learning'</b> - 
                                        Poster accepted at Kasturba Medical college's conference KAMLSCON 2018,
                                        Manipal, India.
                                    </li>
                                </ol>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Publications;
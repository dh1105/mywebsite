import React, { Component } from 'react'
import Header from '../HeaderComponent'
import Footer from '../FooterComponent'
import { Card, CardBody } from 'reactstrap';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope, FaMedium } from 'react-icons/fa'
import '../Icons.css'

class Contact extends Component {

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    onClickMail = () => {
        window.location.href = `mailto:dhruv.verma110597@gmail.com`;
    }

    openUrl = (url) => {
        window.open(url, "_blank")
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
                                <h2 style={{marginTop: '10px', marginBottom: '20px', fontFamily: "Raleway"}}><b>Contact</b></h2>
                                <hr />
                                <p style={{ fontFamily: "Source Sans Pro" }}>Feel free to get in touch with me. You can email me at:<br />
                                <span className="contact"><a style={{color: 'inherit'}} href="mailto:dhruv.verma110597@gmail.com"><u>dhruv.verma110597@gmail.com</u></a></span></p>
                                <div className="row" style={{marginTop: '20px'}}>
                                    <div className="col-auto">
                                        <FaGithub size={20} className="contact-icon" onClick={() => this.openUrl("https://github.com/dh1105")} />
                                        <FaLinkedinIn size={20} className="contact-icon" onClick={() => this.openUrl("https://www.linkedin.com/in/dhruv-verma-273190160/")} />
                                        <FaInstagram size={20} className="contact-icon" onClick={() => this.openUrl("https://www.instagram.com/dh1105/?hl=en")} />
                                        <FaFacebookF size={20} className="contact-icon" onClick={() => this.openUrl("https://www.facebook.com/dhruv2scs")} />
                                        <FaMedium size={20} className="contact-icon" onClick={() => this.openUrl("https://medium.com/@dh1105")} />
                                        <FaEnvelope size={20} className="contact-icon" onClick={this.onClickMail} />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}

export default Contact;
import React, { Component } from 'react'
import Header from '../HeaderComponent'
import Footer from '../FooterComponent'
import { Card, CardBody } from 'reactstrap';
import { MdMailOutline } from 'react-icons/md'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

class Contact extends Component {

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
                        <Card style={{ width: '100%', marginTop: '100px', marginBottom: '50px' }}>
                            <CardBody>
                                <h2 style={{marginTop: '10px', marginBottom: '30px', fontFamily: "Open Sans"}}>Contact</h2>
                                <hr />
                                <p style={{ fontFamily: "Montserrat" }}>Feel free to get in touch with me. You can email me at:</p>
                                <span style={{ fontFamily: "Montserrat", cursor: "pointer" }} onClick={this.onClickMail}>dhruv.verma110597@gmail.com</span>
                                <div className="row" style={{marginTop: '50px'}}>
                                    <div className="col-auto">
                                        <FaGithub size={20} style={{ marginInlineEnd: '20px', cursor: 'pointer' }} onClick={() => this.openUrl("https://github.com/dh1105")} />
                                        <FaLinkedinIn size={20} style={{ marginInlineEnd: '20px', cursor: 'pointer' }} onClick={() => this.openUrl("https://www.linkedin.com/in/dhruv-verma-273190160/")} />
                                        <FaInstagram size={20} style={{ marginInlineEnd: '20px', cursor: 'pointer' }} onClick={() => this.openUrl("https://www.instagram.com/dh1105/?hl=en")} />
                                        <FaFacebookF size={20} style={{ marginInlineEnd: '20px', cursor: 'pointer' }} onClick={() => this.openUrl("https://www.facebook.com/dhruv2scs")} />
                                        <MdMailOutline size={20} style={{ marginInlineEnd: '20px', cursor: 'pointer' }} onClick={this.onClickMail} />
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
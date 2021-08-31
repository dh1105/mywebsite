import React, { Component } from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaMedium, FaEnvelope } from 'react-icons/fa'
import { SiGooglescholar } from 'react-icons/si'
import myimage from './assets/myimage.jpg'
import "./Icons.css"


class Footer extends Component {

    onClickMail = () => {
        window.location.href = `mailto:dhruv.verma@stonybrook.edu`;
    }

    openUrl = (url) => {
        window.open(url, "_blank")
    }

    render() {
        return (
            <div className="App">
                <div className="container" style={{ marginBottom: "20px" }}>
                    <hr />
                    <div>
                        <img src={myimage} alt="Dhruv Verma" style={{ height: '200px', width: '200px', WebkitBorderRadius: '50%', boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} />
                    </div>
                    <h3 style={{ marginTop: '20px', fontFamily: "Raleway" }}>Dhruv Verma</h3>
                    <span className="footer-email" ><a style={{color: 'inherit'}} href="mailto:dhruv.verma@stonybrook.edu">dhruv.verma@stonybrook.edu</a></span>
                    <hr />
                    <p style={{ marginTop: '10px', fontFamily: "Source Sans Pro", fontWeight: "300" }}>Hi, I am Dhruv. I like to make things. I am currently doing my Master's of Science in Computer Science from Stony Brook University. I am looking for Software Engineering or Research Scientist internships for Summer 2022.</p>
                </div>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-auto">
                                <FaGithub size={20} className="icon" onClick={() => this.openUrl("https://github.com/dh1105")} />
                                <SiGooglescholar size={20} className="icon" onClick={() => this.openUrl("https://scholar.google.com/citations?user=0RASMhYAAAAJ&hl=en")} />
                                <FaMedium size={20} className="icon" onClick={() => this.openUrl("https://medium.com/@dh1105")} />
                                <FaEnvelope size={20} className="icon" onClick={this.onClickMail} />
                                <FaLinkedinIn size={20} className="icon" onClick={() => this.openUrl("https://www.linkedin.com/in/dhruv-verma-273190160/")} />
                                <FaInstagram size={20} className="icon" onClick={() => this.openUrl("https://www.instagram.com/dh1105/?hl=en")} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-auto">
                                <p style={{ marginTop: '10px', color: '#e9ecef', fontFamily: "Raleway" }}>© Dhruv Verma</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
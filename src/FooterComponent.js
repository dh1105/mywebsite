import React, { Component } from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram, Fa500Px, FaEnvelope } from 'react-icons/fa'
import myimage from './assets/myimage.jpg'
import "./Icons.css"


class Footer extends Component {

    onClickMail = () => {
        window.location.href = `mailto:dhruv.verma110597@gmail.com`;
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
                    <span className="footer-email" ><a style={{color: 'inherit'}} href="mailto:dhruv.verma110597@gmail.com">dhruv.verma110597@gmail.com</a></span>
                    <hr />
                    <p style={{ marginTop: '10px', fontFamily: "Source Sans Pro", fontWeight: "300" }}>Hi, I am Dhruv. I like to make things. I am a Computer Science undergraduate from Manipal Institute of Technology and am currently working at Hewlett Packard Enterprise in Bangalore, India.</p>
                </div>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-auto">
                                <FaGithub size={20} className="icon" onClick={() => this.openUrl("https://github.com/dh1105")} />
                                <FaLinkedinIn size={20} className="icon" onClick={() => this.openUrl("https://www.linkedin.com/in/dhruv-verma-273190160/")} />
                                <FaInstagram size={20} className="icon" onClick={() => this.openUrl("https://www.instagram.com/dh1105/?hl=en")} />
                                <FaFacebookF size={20} className="icon" onClick={() => this.openUrl("https://www.facebook.com/dhruv2scs")} />
                                <Fa500Px size={20} className="icon" onClick={() => this.openUrl("https://500px.com/dhruv2scs")} />
                                <FaEnvelope size={20} className="icon" onClick={this.onClickMail} />
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
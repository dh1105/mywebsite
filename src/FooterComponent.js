import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdMailOutline } from 'react-icons/md'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

class Footer extends Component {

    onClickMail = () => {
        window.location.href = `mailto:dhruv.verma110597@gmail.com`;
    }

    openUrl = (url) => {
        window.open(url, "_blank")
    }

    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-auto">
                            <FaGithub size={20} style={{ marginInlineEnd: '20px', cursor: 'pointer' }} onClick={() => this.openUrl("https://github.com/dh1105")} />
                            <FaLinkedinIn size={20} style={{ marginInlineEnd: '20px', cursor: 'pointer' }} onClick={() => this.openUrl("https://www.linkedin.com/in/dhruv-verma-273190160/")}/>
                            <FaInstagram size={20} style={{ marginInlineEnd: '20px', cursor: 'pointer' }} onClick={() => this.openUrl("https://www.instagram.com/dh1105/?hl=en")}/>
                            <FaFacebookF size={20} style={{ marginInlineEnd: '20px', cursor: 'pointer' }} onClick={() => this.openUrl("https://www.facebook.com/dhruv2scs")}/>
                            <MdMailOutline size={20} style={{ marginInlineEnd: '20px', cursor: 'pointer' }} onClick={this.onClickMail} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-auto">
                            <p style={{marginTop: '10px'}}>© Dhruv Verma</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
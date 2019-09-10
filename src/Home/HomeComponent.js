import React, { Component } from 'react'
import Header from '../HeaderComponent'
import Footer from '../FooterComponent'
import {
    Card, CardBody, Row, Col
} from 'reactstrap';
import { FaHiking, FaMusic, FaCamera, FaUtensils, FaRunning } from 'react-icons/fa';
import { GiTennisRacket } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import CardFlip from './CardFlipComponent';

// const FlippyStyle = {
//     width: '100%',
//     height: '100%',
//     textAlign: 'center',
//     fontFamily: "Raleway",
//     fontSize: '100%',
//     justifyContent: 'center',
//     color: '#FFF'
// }

// const FlippyOnHover = ({ flipDirection, icon, text, backText }) => (
//     <Flippy
//         flipOnHover={true}
//         flipDirection={flipDirection}
//         style={FlippyStyle}
//     >
//         <FrontSide style={{
//             backgroundColor: '#57a0d3',
//             display: 'flex',
//             alignItems: 'center',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             borderRadius: '5px'
//         }}>
//             <div style={{ height: '100%', width: '100%', marginTop: '20px' }}>
//                 {icon}
//             </div>
//             <div>
//                 <p>{text}</p>
//             </div>
//         </FrontSide>
//         <BackSide style={{
//             backgroundColor: '#57a0d3',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             borderRadius: '5px'
//         }}>
//             <div>
//                 {backText}
//             </div>
//         </BackSide>
//     </Flippy>
// );


class Home extends Component {

    componentWillMount() {
        window.scrollTo(0, 0);
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
                            <CardBody className="App">
                                <h1 style={{ marginTop: '10px', marginBottom: '20px', fontFamily: "Raleway", fontWeight: "400" }}><b>Dhruv Verma</b></h1>
                                <hr />
                                <p style={{ fontFamily: "Source Sans Pro" }}>
                                    Please feel free to check out my <Link className="contact" style={{ fontFamily: "Source Sans Pro", color: "inherit" }} to="/resume">resume</Link>, the <Link className="contact" style={{ fontFamily: "Source Sans Pro", color: "inherit" }} to="/projects">projects</Link> I have done or you could <Link className="contact" style={{ fontFamily: "Source Sans Pro", color: "inherit" }} to="/contact">contact me</Link>.
                                </p>
                                <Row style={{ justifyContent: 'center' }}>
                                    <Col xs="8" sm="6" md="3" lg="2" >
                                        <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
                                            <CardFlip icon={<FaHiking size={50} style={{ color: '#fff' }} />} text="Hiking" backText="In the Himalayas" />
                                        </div>
                                    </Col>
                                    <Col xs="8" sm="6" md="3" lg="2" style={{ marginBottom: '15px', justifyContent: 'center' }}>
                                        <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
                                            <CardFlip icon={<FaMusic size={50} style={{ color: '#fff' }} />} text="Playing music" backText="On the guitar" />
                                        </div>
                                    </Col>
                                    <Col xs="8" sm="6" md="3" lg="2" style={{ marginBottom: '15px', justifyContent: 'center' }}>
                                        <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
                                            <CardFlip icon={<FaCamera size={50} style={{ color: '#fff' }} />} text="Photography" backText="Of landscapes and the night sky" />
                                        </div>
                                    </Col>
                                    <Col xs="8" sm="6" md="3" lg="2" style={{ marginBottom: '15px', justifyContent: 'center' }}>
                                        <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
                                            <CardFlip icon={<GiTennisRacket size={50} style={{ color: '#fff' }} />} text="Squash" backText="Alone or with a partner" />
                                        </div>
                                    </Col>
                                    <Col xs="8" sm="6" md="3" lg="2" style={{ marginBottom: '15px', justifyContent: 'center' }}>
                                        <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
                                            <CardFlip icon={<FaUtensils size={50} style={{ color: '#fff' }} />} text="Cooking" backText="Indian and Italian food" />
                                        </div>
                                    </Col>
                                    <Col xs="8" sm="6" md="3" lg="2" style={{ marginBottom: '15px', justifyContent: 'center' }}>
                                        <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
                                            <CardFlip icon={<FaRunning size={50} style={{ color: '#fff' }} />} text="Running" backText="On a pleasant day" />
                                        </div>
                                    </Col>
                                </Row>
                                <p style={{ fontFamily: "Source Sans Pro", marginTop: '20px' }}>The source code for this website can be found <a target="_blank" rel="noopener noreferrer" className="contact" style={{ color: "inherit" }} href="https://github.com/dh1105/mywebsite">here</a></p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}

export default Home;
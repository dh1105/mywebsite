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
import myimage from '../assets/myimage.jpg'
import FactsCard from './FactsCardComponent';
import natgeo from '../assets/natgeo.jpg'
import mun from '../assets/mun.png';
import trek from '../assets/trek.png';
import plane from '../assets/plane.jpg'

const facts = {
    natgeo: {
        img: <img src={natgeo} style={{ width: '70%', height: 'auto', marginTop: '10px' }} alt="National Geographic Traveller India" />,
        fact: <span style={{ fontFamily: "Source Sans Pro" }}>My pictures have been featured multiple times in the National
        Geographic Traveller India magazine. One was printed as part of an issue, another was part of a photo story on their website,
        and three more have won a monthly photography contest!</span>
    },
    mun: {
        img: <img src={mun} style={{ width: '55%', height: 'auto' }} alt="Model UN" />,
        fact: <span style={{ fontFamily: "Source Sans Pro" }}>I have taken part in over 20 Model UN conferences in India. Out of these, I have
        awards in 13 and have been part of the executive board for a committee in 5.</span>
    },
    trek: {
        img: <img src={trek} style={{ width: '70%', height: 'auto', marginTop: '10px' }} alt="Trekking" />,
        fact: <span style={{ fontFamily: "Source Sans Pro" }}>I have completed two high altitude treks in the Himalayas. The first being Roopkund lake
        at 16,470 ft above sea level and the second being Kuari Pass at 12,516 ft above sea level.</span>
    },
    aviation: {
        img: <img src={plane} style={{ width: '50%', height: 'auto', marginTop: '10px' }} alt="Plane" />,
        fact: <span style={{ fontFamily: "Source Sans Pro" }}>I am a huge aviation enthusiast. Whenever I travel, I always try to sit in a new aircraft.
        I mastered the game - Microsoft Flight Simulator - in grade 5 and can fly a plane on it. So if by chance you are in a flight which needs a pilot,
        I actually might be of help!</span>
    }
}

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
                                <div style={{ marginBottom: '30px' }}>
                                    <h4 style={{ marginTop: '20px', fontFamily: "Raleway", fontWeight: "400", marginBottom: '20px' }}>About me</h4>
                                    <Row>
                                        {/* <Col sm="auto" md="auto" lg="auto" style={{ marginBottom: '15px' }}>
                                            <div>
                                                <img src={myimage} alt="Dhruv Verma" style={{ height: '150px', width: '150px', WebkitBorderRadius: '50%' }} />
                                            </div>
                                        </Col> */}
                                        <Col>
                                            <div style={{ marginBottom: '20px' }}>
                                                <img src={myimage} alt="Dhruv Verma" style={{ height: '150px', width: '150px', WebkitBorderRadius: '50%' }} />
                                            </div>
                                            <p style={{ fontFamily: "Source Sans Pro" }}>
                                                I am a Computer Science undergraduate major from Manipal Institute of Technology, Manipal. I have worked on projects in the field of <b>Android development</b>,
                                        <b> web development</b> across the full-stack using ReactJS and Flask and the application of <b>deep learning</b> to NLP and medical image analysis problems. I love to develop innovative solutions to problems I have faced in my daily life. My academic research
                                        interests lie in field of <b>computational semantics</b>. I wish to work on improving the semantic analysis capabilities of smart assistants in the near future. I am currently working
                                        as a <b>Software Engineer at Hewlett Packard Enterprise</b> in the 3PAR File Persona team.
                                </p>
                                        </Col>
                                    </Row>
                                    <p style={{ fontFamily: "Source Sans Pro" }}>
                                        Please feel free to check out my <Link className="contact" style={{ fontFamily: "Source Sans Pro", color: "inherit" }} to="/resume"><u>resume</u></Link>, the <Link className="contact" style={{ fontFamily: "Source Sans Pro", color: "inherit" }} to="/projects"><u>projects</u></Link> I have done, or you could <Link className="contact" style={{ fontFamily: "Source Sans Pro", color: "inherit" }} to="/contact"><u>contact me</u></Link>.
                                </p>
                                </div>
                                <div style={{ marginBottom: '30px' }}>
                                    <h4 style={{ marginTop: '20px', fontFamily: "Raleway", fontWeight: "400", marginBottom: '30px' }}>Some interesting facts about me</h4>
                                    <Row >
                                        <Col xs="12" sm="6" md="6" lg="6" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                            <FactsCard icon={facts.natgeo.img} fact={facts.natgeo.fact} />
                                        </Col>
                                        <Col xs="12" sm="6" md="6" lg="6" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                            <FactsCard icon={facts.mun.img} fact={facts.mun.fact} />
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col xs="12" sm="6" md="6" lg="6" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                            <FactsCard icon={facts.trek.img} fact={facts.trek.fact} />
                                        </Col>
                                        <Col xs="12" sm="6" md="6" lg="6" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                            <FactsCard icon={facts.aviation.img} fact={facts.aviation.fact} />
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                    <h4 style={{ marginTop: '10px', fontFamily: "Raleway", fontWeight: "400" }}>My hobbies</h4>
                                    <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
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
                                </div>
                                <p style={{ fontFamily: "Source Sans Pro", marginTop: '20px' }}>The source code for this website can be found <a target="_blank" rel="noopener noreferrer" className="contact" style={{ color: "inherit" }} href="https://github.com/dh1105/mywebsite"><u>here</u></a></p>
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
import React, { Component } from 'react'
import Header from '../HeaderComponent'
import Footer from '../FooterComponent'
import { Card, CardBody, Row, Progress, Button, Col } from 'reactstrap';
import * as Scroll from 'react-scroll';
import './ButtonStyle.css';
// import manipal from '../assets/manipal.png'
// import hpe from '../assets/hpe.png'
// import emden from '../assets/emden.png'
// import tob from '../assets/tob.png'
// import tedx from '../assets/tedx.png'
// import ttt from '../assets/ttt.png'
import { FaGraduationCap, FaSuitcase } from 'react-icons/fa'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

// const fontForHeadings = { marginRight: '20px', fontFamily: "Montserrat", cursor: "pointer" }
// const lightFont = { fontFamily: "Montserrat", fontWeight: "300" }
// const font = { fontFamily: "Montserrat" }
const headingFont = { fontFamily: "Raleway", fontWeight: "400" }
const sentenceFont = { fontFamily: "Source Sans Pro" }
// const subHeadingFont = { fontFamily: "Raleway", fontWeight: "300" }
const courseListStyle = { fontFamily: "Raleway", fontWeight: "300", marginRight: '30px' }
var Element = Scroll.Element;
var scroller = Scroll.scroller;

const skills = {
    MachineLearning: {
        Keras: 4,
        Pytorch: 4,
        Pandas: 4,
        Matlab: 3,
        Numpy: 3,
        color: "primary"
    },
    Languages: {
        Java: 5,
        Python: 5,
        C: 4,
        Javascript: 3,
        Matlab: 3,
        color: "secondary"
    },
    Frameworks: {
        React: 5,
        Bootstrap: 5,
        Android: 5,
        MySQL: 4,
        Flask: 4,
        Firebase: 4,
        color: "success"
    },
    Tools: {
        Git: 4,
        Heroku: 3,
        color: "danger"
    },
    Design: {
        Lightroom: 5,
        Photoshop: 3,
        color: "warning"
    },
    WebDevelopment: {
        React: 5,
        Bootstrap: 5,
        Flask: 4,
        REST: 4,
        Firebase: 4,
        MongoDB: 3,
        CSS: 3,
        color: "info"
    },
    Python: {
        Python: 5,
        Keras: 4,
        Pytorch: 4,
        Pandas: 4,
        Flask: 4,
        Numpy: 3,
        color: ""
    }
}

const skillMap = {
    0: 'all',
    1: 'MachineLearning',
    2: 'Languages',
    3: 'Frameworks',
    4: 'Python',
    5: 'WebDevelopment',
    6: 'Tools',
    7: 'Design'
}

class Resume extends Component {

    constructor(props) {
        super(props)

        this.state = {
            skillSelected: [1, 0, 0, 0, 0, 0, 0, 0]
        }
    }

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 500,
            smooth: true,
            offset: -100,
        })
    }

    buttonClicked = (index) => (event) => {
        event.preventDefault();
        var selected = []
        for (var i = 0; i < 8; i++) {
            if (index === i) {
                selected[i] = 1
            }
            else {
                selected[i] = 0
            }
        }
        this.setState({
            skillSelected: selected
        })
    }

    getUniqueSkills = () => {
        var uniqueSkills = {}
        for (var skill in skills) {
            var indivSkills = skills[skill]
            for (var indivSkill in indivSkills) {
                if (!(indivSkill in uniqueSkills) && indivSkill.toString() !== "color") {
                    var concatVal = indivSkills[indivSkill] + "-" + indivSkills.color
                    uniqueSkills[indivSkill] = concatVal
                }
            }
        }
        return uniqueSkills
    }

    // openUrl = (url) => {
    //     window.open(url, "_blank")
    // }

    render() {

        const categories = ["All", "Machine learning", "Languages", "Frameworks", "Python", "Web Development", "Tools", "Design"]
        var buttons = []
        var skill = this.state.skillSelected
        var index = null
        for (var i = 0; i < 8; i++) {
            if (skill[i] === 0) {
                buttons.push(
                    <Button className="button" onClick={this.buttonClicked(i)}>{categories[i]}</Button>
                )
            }
            else {
                buttons.push(
                    <Button className="selected-button">{categories[i]}</Button>
                )
                index = i;
            }
        }

        var prog_bar = []

        if (index !== 0) {
            var skillObj = skills[skillMap[index]]
            for (var obj in skillObj) {
                if (obj.toString() !== "color") {
                    var value = (skillObj[obj] / 5) * 100
                    prog_bar.push(
                        <Progress value={value} color={skillObj.color} style={{ marginBottom: '15px', height: '30px', borderRadius: '2px' }}>
                            {obj}{' '}{skillObj[obj]}/5
                        </Progress>
                    )
                }
            }
        }
        else {
            const uniqueSkills = this.getUniqueSkills()
            for (obj in uniqueSkills) {
                var valAndColor = uniqueSkills[obj].split("-")
                value = (parseInt(valAndColor[0]) / 5) * 100;
                prog_bar.push(
                    <Progress value={value} color={valAndColor[1]} style={{ marginBottom: '15px', height: '30px', borderRadius: '2px' }}>{obj}{' '}{valAndColor[0]}/5</Progress>
                )
            }
        }

        return (
            <div>
                <Header />
                <div className="container">
                    <div className="col-auto">
                        {/* <h1 style={{marginTop: '10px'}}>Hello, welcome to my website!</h1> */}
                        <h2 style={{ marginTop: '100px', marginBottom: '20px', fontFamily: "Raleway", fontWeight: "400" }}><b>Resume</b></h2>
                        <Row style={{ marginLeft: '1px' }}>
                            <h5 className="resume-heading" onClick={() => this.scrollToElement("education")}>Education</h5>
                            <h5 className="resume-heading" onClick={() => this.scrollToElement("experience")}>Experience</h5>
                            <h5 className="resume-heading" onClick={() => this.scrollToElement("skills")}>Skills</h5>
                            <h5 className="resume-heading" onClick={() => this.scrollToElement("courses")}>Courses</h5>
                        </Row>
                        <hr />

                        {/* <div className="App" style={{ marginTop: '40px' }}>
                            <h5 style={headingFont}><b>Education</b></h5>
                        </div> */}
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="2015 - 2019"
                                iconStyle={{ background: '#e91e63', color: '#fff' }}
                                icon={<FaGraduationCap />}>
                                <Element name="education" />
                                <Row>
                                    {/* <Col sm="3" md="3" lg="3" style={{ textAlign: "center", marginBottom: "20px" }}>
                                        <a target="_blank" rel="noopener noreferrer" href="https://manipal.edu/mit.html"><img src={manipal} style={{ height: "auto", width: "100px" }} alt="Manipal Insitute of Technology" /></a>
                                    </Col> */}
                                    <Col style={{ textAlign: "left" }}>
                                        <h4 style={headingFont}><b>Bachelor of Technology, Computer Science and Engineering</b></h4>
                                        <span style={sentenceFont} className="resume-heading" ><a target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }} href="https://manipal.edu/mit.html">Manipal Institute of Technology, Manipal</a></span>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            {/* <div className="App">
                                <h5 style={headingFont}><b>Experience</b></h5>
                            </div> */}
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="July 2019 - Present"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<FaSuitcase />}>
                                <Element name="experience" />
                                <Row style={{ marginBottom: '20px' }}>
                                    {/* <Col sm="3" md="3" lg="3" style={{ textAlign: "center", marginBottom: "20px" }}>
                                        <a target="_blank" rel="noopener noreferrer" href="https://hpe.com/"><img src={hpe} style={{ height: "auto", width: "80%" }} alt="Hewlett Packard Enterprise" /></a>
                                    </Col> */}
                                    <Col style={{ textAlign: "left" }}>
                                        <h4 style={headingFont} className="resume-heading" ><a target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }} href="https://hpe.com/"><b>Hewlett Packard Enterprise - R&D Engineer</b></a></h4>
                                        <ul style={{ padding: '0px 0px 0px 15px' }}>
                                            <li style={sentenceFont}>Working in the 3PAR File Persona Team to develop a CLI interface for file storage</li>
                                            <li style={sentenceFont}>Understanding the product end-to-end by developing features and testing their functionality</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                style={{ padding: "0px" }}
                                className="vertical-timeline-element--work"
                                date="January 2019 - July 2019"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<FaSuitcase />}>
                                <Row>
                                    {/* <Col sm="3" md="3" lg="3" style={{ textAlign: "center", marginBottom: "20px" }}>
                                        <a target="_blank" rel="noopener noreferrer" href="https://hpe.com/"><img src={hpe} style={{ height: "auto", width: "80%" }} alt="Hewlett Packard Enterprise" /></a>
                                    </Col> */}
                                    <Col style={{ textAlign: "left" }}>
                                        <h4 style={headingFont} className="resume-heading"><a target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }} href="https://hpe.com/"><b>Hewlett Packard Enterprise - R&D Intern</b></a></h4>
                                        <ul style={{ padding: '0px 0px 0px 15px' }}>
                                            <li style={sentenceFont}>Worked in the Nimble Storage Team to develop a web dashboard using Flask, Reactjs and MySQL to visualise and track test suite execution for all Nimble products</li>
                                            <li style={sentenceFont}>Containerised the website for hosting using Docker into three containers - NGINX web server, uwsgi-Nginx-flask web server and MySQL server</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                style={{ padding: "0px" }}
                                className="vertical-timeline-element--work"
                                date="May 2018 - July 2018"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<FaSuitcase />}>
                                <Row>
                                    {/* <Col sm="3" md="3" lg="3" style={{ textAlign: "center", marginBottom: "20px" }}>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.hs-emden-leer.de/"><img src={emden} style={{ height: "auto", width: "80%" }} alt="Hochschule Emden/Leer" /></a>
                                    </Col> */}
                                    <Col style={{ textAlign: "left" }}>
                                        <h4 style={headingFont} className="resume-heading"><a target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }} href="https://www.hs-emden-leer.de/"><b>Hochschule Emden/Leer - Summer Research Intern</b></a></h4>
                                        <ul style={{ padding: '0px 0px 0px 15px' }}>
                                            <li style={sentenceFont}>Worked with Professor Juho Mäkiö under a DAAD grant to research on the viability of the Constrained Application Protocol (CoAP) in the use of IoT networks with low power nodes</li>
                                            <li style={sentenceFont}>Coded device drivers in C for the INA219 sensor to read node current and voltage readings and MAX17043 sensor to get battery readings</li>
                                            <li style={sentenceFont}>Developed a python CoAP web-server using CoAPthon to service and store incoming sensor readings from remote nodes</li>
                                            <li style={sentenceFont}>Contributed to the open-source RIOT operating system repo by adding support for the drivers mentioned above</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                style={{ padding: "0px" }}
                                className="vertical-timeline-element--work"
                                date="May 2017 - July 2017"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<FaSuitcase />}>
                                <Row>
                                    {/* <Col sm="3" md="3" lg="3" style={{ textAlign: "center", marginBottom: "20px" }}>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.tripoffbeat.com/"><img src={tob} style={{ height: "auto", width: "80%" }} alt="TripOffbeat" /></a>
                                    </Col> */}
                                    <Col style={{ textAlign: "left" }}>
                                        <h4 style={headingFont} className="resume-heading" ><a target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }} href="https://www.tripoffbeat.com/"><b>TripOffbeat - Software development Intern</b></a></h4>
                                        <ul style={{ padding: '0px 0px 0px 15px' }}>
                                            <li style={sentenceFont}>Developed an Android application to assist the sales team in serving clients</li>
                                            <li style={sentenceFont}>Increased the overall efficiency of the sales team by allowing quicker access to resort information and also automated receipt generation</li>
                                            <li style={sentenceFont}>Got introduced to the REST framework and developed API's in PHP for the app to fetch data from the database</li>
                                            <li style={sentenceFont}>Modified the MySQL database by adding tables to allow authentication</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                style={{ padding: "0px" }}
                                className="vertical-timeline-element--work"
                                date="March 2016 - May 2018"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<FaSuitcase />}>
                                <Row>
                                    {/* <Col sm="3" md="3" lg="3" style={{ textAlign: "center", marginBottom: "20px" }}>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/TEDxManipal19/"><img src={tedx} style={{ height: "auto", width: "80%" }} alt="TEDxManipal" /></a>
                                    </Col> */}
                                    <Col style={{ textAlign: "left" }}>
                                        <h4 style={headingFont} className="resume-heading" ><a target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }} href="https://www.facebook.com/TEDxManipal19/"><b>TEDxManipal - Founder and Head Organiser</b></a></h4>
                                        <ul style={{ padding: '0px 0px 0px 15px' }}>
                                            <li style={sentenceFont}>Founded TEDxManipal (formerly known as TEDxManipalUniversity) in my first year under the license of TED Global, New York</li>
                                            <li style={sentenceFont}>Responsible for the leading and organising a local TEDx conference in 2017 and 2018</li>
                                            <li style={sentenceFont}>Invited a variety of speakers ranging from local student speakers to well-established scientists and musicians</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                style={{ padding: "0px" }}
                                className="vertical-timeline-element--work"
                                date="March 2016 - May 2018"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<FaSuitcase />}>
                                <Row>
                                    {/* <Col sm="3" md="3" lg="3" style={{ textAlign: "center", marginBottom: "20px" }}>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/TheThinkTankMIT/"><img src={ttt} style={{ height: "auto", width: "80%" }} alt="The Think Tank" /></a>
                                    </Col> */}
                                    <Col style={{ textAlign: "left" }}>
                                        <h4 style={headingFont} className="resume-heading"><a target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }} href="https://www.facebook.com/TheThinkTankMIT/"><b>The Think Tank - Founder and President</b></a></h4>
                                        <ul style={{ padding: '0px 0px 0px 15px' }}>
                                            <li style={sentenceFont}>Founded The Think Tank, a student club, in my first year to try and promote out-of-the-box-thinking amongst the students of my university</li>
                                            <li style={sentenceFont}>Responsible for the leading and organising two fireside chats with Rakesh Sharma (The first Indian to go to space) and Dilip Chhabria (An Indian car designer) respectively for a crowd of 400+ students and faculty</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                        <Card style={{ width: '100%', marginBottom: '30px' }}>
                            <CardBody>
                                <Element name="skills" />
                                <div className="App" style={{ marginTop: '30px', marginBottom: '20px' }}>
                                    <h4 style={headingFont}><b>Skills</b></h4>
                                </div>
                                <div style={{ marginBottom: '30px' }} className="App">
                                    {buttons}
                                </div>
                                <div style={{ marginBottom: '50px' }} >
                                    {prog_bar}
                                </div>
                                <Element name="courses" />
                                <div className="App" style={{ marginBottom: '30px' }}>
                                    <h5 style={headingFont}><b>Courses</b></h5>
                                </div>
                                <div style={{ marginBottom: '50px' }} className="App">
                                    <p style={headingFont}>
                                        <b>CSE 2103</b><span style={courseListStyle}>: Data structures</span>
                                        <b>CSE 2101</b><span style={courseListStyle}>: Computer organisation and design</span>
                                        <b>CSE 2201</b><span style={courseListStyle}>: Formal language and automata theory</span>
                                        <b>CSE 2202</b><span style={courseListStyle}>: Design and analysis of algorithms</span>
                                        <b>CSE 2204</b><span style={courseListStyle}>: Database systems</span>
                                        <b>CSE 3101</b><span style={courseListStyle}>: Computer architecture</span>
                                        <b>CSE 3102</b><span style={courseListStyle}>: Operating systems</span>
                                        <b>CSE 3102</b><span style={courseListStyle}>: Computer networks</span>
                                        <b>CSE 2202</b><span style={courseListStyle}>: Design and analysis of algorithms</span>
                                        <b>CSE 4027</b><span style={courseListStyle}>: Mobile application development</span>
                                        <b>CSE 3201</b><span style={courseListStyle}>: Compiler design</span>
                                        <b>CSE 3202</b><span style={courseListStyle}>: Parallel computer architecture and programming</span>
                                        <b>CSE 4009</b><span style={courseListStyle}>: Artificial intelligence</span>
                                        <b>CSE 4010</b><span style={courseListStyle}>: Machine learning</span>
                                        <b>CSE 4011</b><span style={courseListStyle}>: Natural language processing</span>
                                        <b>CSE 4012</b><span style={courseListStyle}>: Social network analysis</span>
                                        <b>CSE 4031</b><span style={courseListStyle}>: Soft computing paradigms</span>
                                        <b>CSE 4101</b><span style={courseListStyle}>: Internet technologies</span>
                                        <b>CSE 4111</b><span style={courseListStyle}>: Distributed and cloud computing</span>
                                    </p>
                                    <p style={headingFont}>
                                        <span className="course"><a target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }} href="https://www.coursera.org/account/accomplishments/specialization/certificate/Y9ELV3DLZV5L"><b>Coursera</b><span style={courseListStyle}>: Deep Learning specialization</span></a></span>
                                        <span className="course" ><a target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }} href="https://www.coursera.org/account/accomplishments/specialization/certificate/QFY7X3FPRM5P"><b>Coursera</b><span style={courseListStyle}>: Python for everybody specialization</span></a></span>
                                        <span className="course" ><a target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }} href="https://www.coursera.org/account/accomplishments/certificate/VH92QELLCVNK"><b>Coursera</b><span style={courseListStyle}>: Front-end development with React</span></a></span>
                                        <span className="course" ><a target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }} href="https://www.coursera.org/account/accomplishments/certificate/YLAVGVFZ384W"><b>Coursera</b><span style={courseListStyle}>: Machine Learning</span></a></span>
                                    </p>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div >
                <Footer />
            </div >
        )
    }
}

export default Resume;
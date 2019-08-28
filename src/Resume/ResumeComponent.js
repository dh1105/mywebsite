import React, { Component } from 'react'
import Header from '../HeaderComponent'
import Footer from '../FooterComponent'
import { Card, CardBody, Row, Progress, Button, li } from 'reactstrap';
import * as Scroll from 'react-scroll';
import './ButtonStyle.css';

// const fontForHeadings = { marginRight: '20px', fontFamily: "Montserrat", cursor: "pointer" }
// const lightFont = { fontFamily: "Montserrat", fontWeight: "300" }
// const font = { fontFamily: "Montserrat" }
const headingFont = { fontFamily: "Raleway", fontWeight: "400" }
const sentenceFont = { fontFamily: "Source Sans Pro" }
const subHeadingFont = { fontFamily: "Raleway", fontWeight: "300" }
const courseListStyle = { fontFamily: "Raleway", fontWeight: "300", marginRight: '30px' }
var Element = Scroll.Element;
var scroller = Scroll.scroller;

const skills = {
    MachineLearning: {
        Keras: 4,
        Tensorflow: 4,
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
        Tensorflow: 4,
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
            offset: -50,
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

    openUrl = (url) => {
        window.open(url, "_blank")
    }

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
                        <Card style={{ width: '100%', marginTop: '100px', marginBottom: '30px' }}>
                            <CardBody>
                                <h2 style={{ marginTop: '10px', marginBottom: '20px', fontFamily: "Raleway", fontWeight: "400" }}><b>Resume</b></h2>
                                <Row style={{ marginLeft: '1px' }}>
                                    <h5 className="resume-heading" onClick={() => this.scrollToElement("education")}>Education</h5>
                                    <h5 className="resume-heading" onClick={() => this.scrollToElement("experience")}>Experience</h5>
                                    <h5 className="resume-heading" onClick={() => this.scrollToElement("skills")}>Skills</h5>
                                    <h5 className="resume-heading" onClick={() => this.scrollToElement("courses")}>Courses</h5>
                                </Row>
                                <hr />
                                <Element name="education" />
                                <div className="App" style={{ marginTop: '40px', marginBottom: '30px' }}>
                                    <h5 style={headingFont}><b>Education</b></h5>
                                </div>
                                <p style={sentenceFont}>Bachelor of Technology, Computer Science and Engineering<br />Manipal Institute of Technology, 2019</p>
                                <Element name="experience" />
                                <div className="App" style={{ marginTop: '40px', marginBottom: '30px' }}>
                                    <h5 style={headingFont}><b>Experience</b></h5>
                                </div>
                                <div style={{ marginBottom: '50px' }}>
                                    <h6 style={headingFont}><b>Hewlett Packard Enterprise - R&D Engineer</b></h6>
                                    <p style={subHeadingFont}>July 2019 - Present</p>
                                    <ul style={{ padding: '0px 0px 0px 15px' }}>
                                        <li style={sentenceFont}>Working in the 3PAR File Persona Team to develop a CLI interface for file storage</li>
                                        <li style={sentenceFont}>Understanding the product end-to-end by developing features and testing their functionality</li>
                                    </ul>
                                </div>
                                <div style={{ marginBottom: '50px' }}>
                                    <h6 style={headingFont}><b>Hewlett Packard Enterprise - R&D Intern</b></h6>
                                    <p style={subHeadingFont}>January 2019 - July 2019</p>
                                    <ul style={{ padding: '0px 0px 0px 15px' }}>
                                        <li style={sentenceFont}>Worked in the Nimble Storage Team to develop a web dashboard using Flask, Reactjs and MySQL to visualize and track test suite execution for all Nimble products</li>
                                        <li style={sentenceFont}>Containerised the website for hosting using Docker into 3 containers - NGINX web server, uwsgi-nginx-flask web server and MySQL server</li>
                                    </ul>
                                </div>
                                <div style={{ marginBottom: '50px' }}>
                                    <h6 style={headingFont}><b>Hochschule Emden/Leer - Summer Research Intern</b></h6>
                                    <p style={subHeadingFont}>May 2018 - July 2018</p>
                                    <ul style={{ padding: '0px 0px 0px 15px' }}>
                                        <li style={sentenceFont}>Worked with Professor Juho Mäkiö under a DAAD grant to research on the viability of the Constrainted Application Protocol (CoAP) in the use of IoT networks with low power nodes</li>
                                        <li style={sentenceFont}>Coded device drivers in C for the INA219 sensor to read node current and voltage readings and MAX17043 sensor to get battery readings</li>
                                        <li style={sentenceFont}>Developed a python CoAP web-server using CoAPthon to service and store incoming sensor readings from remote nodes</li>
                                        <li style={sentenceFont}>Contributed to the open-source RIOT operating system repo by adding support for the drivers mentioned above</li>
                                    </ul>
                                </div>
                                <div>
                                    <h6 style={headingFont}><b>TripOffbeat - Software development Intern</b></h6>
                                    <p style={subHeadingFont}>May 2017 - July 2017</p>
                                    <ul style={{ padding: '0px 0px 0px 15px' }}>
                                        <li style={sentenceFont}>Developed an Android application to assist the sales team to serve clients</li>
                                        <li style={sentenceFont}>Increased the overall efficiency of the sales team by allowing quicker access to resort information and also automated receipt generation</li>
                                        <li style={sentenceFont}>Got introduced to the REST framework and developed API's in PHP for the app to fetch data from the database</li>
                                        <li style={sentenceFont}>Modified the MySQL database by introducing tables to allow authentication</li>
                                    </ul>
                                </div>
                                <Element name="skills" />
                                <div className="App" style={{ marginTop: '40px', marginBottom: '30px' }}>
                                    <h5 style={headingFont}><b>Skills</b></h5>
                                </div>
                                <div style={{ marginBottom: '50px' }} className="App">
                                    {buttons}
                                </div>
                                <div>
                                    {prog_bar}
                                </div>
                                <Element name="courses" />
                                <div className="App" style={{ marginTop: '40px', marginBottom: '30px' }}>
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
                                        <span className="course" onClick={() => this.openUrl("https://www.coursera.org/account/accomplishments/specialization/certificate/Y9ELV3DLZV5L")}><b>Coursera</b><span style={courseListStyle}>: Deep Learning specialization</span></span>
                                        <span className="course" onClick={() => this.openUrl("https://www.coursera.org/account/accomplishments/specialization/certificate/QFY7X3FPRM5P")}><b>Coursera</b><span style={courseListStyle}>: Python for everybody specialization</span></span>
                                        <span className="course" onClick={() => this.openUrl("https://www.coursera.org/account/accomplishments/certificate/VH92QELLCVNK")}><b>Coursera</b><span style={courseListStyle}>: Front-end development with React</span></span>
                                        <span className="course" onClick={() => this.openUrl("https://www.coursera.org/account/accomplishments/certificate/YLAVGVFZ384W")}><b>Coursera</b><span style={courseListStyle}>: Machine Learning</span></span>
                                    </p>
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

export default Resume;
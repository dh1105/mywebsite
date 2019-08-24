import React, { Component } from 'react'
import Header from '../HeaderComponent'
import Footer from '../FooterComponent'
import { Card, CardBody, Row, Progress, Button, ButtonGroup } from 'reactstrap';
import * as Scroll from 'react-scroll';
import { all } from 'q';
import './ButtonStyle.css';

const fontForHeadings = { marginRight: '20px', fontFamily: "Montserrat", cursor: "pointer" }
const font = { fontFamily: "Montserrat" }
var Element = Scroll.Element;
var scroller = Scroll.scroller;

const skills = {
    MachineLearning: {
        Keras: 4,
        Tensorflow: 4,
        Matlab: 3,
        Numpy: 3
    },
    Languages: {
        Java: 5,
        Python: 5,
        C: 4,
        Javascript: 3,
        Matlab: 3
    },
    Frameworks: {
        React: 5,
        Bootstrap: 5,
        Android: 5,
        MySQL: 4,
        Flask: 4
    },
    Tools: {
        Git: 4,
        Heroku: 3
    },
    Design: {
        Lightroom: 5,
        Photoshop: 3
    },
    WebDevelopment: {
        React: 5,
        BootStrap: 5,
        Flask: 4,
        REST: 4,
        MongoDB: 3,
        CSS: 3
    },
    Python: {
        Python: 5,
        Keras: 4,
        Tensorflow: 4,
        Flask: 4,
        Numpy: 3
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
            for (var indivSkill in indivSkills){
                if (!(indivSkill in uniqueSkills)){
                    uniqueSkills[indivSkill] = indivSkills[indivSkill]
                }
            }
        } 
        return uniqueSkills
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
        console.log(index)

        if (index != 0) {
            var skillObj = skills[skillMap[index]]
            for (var obj in skillObj) {
                var value = (skillObj[obj] / 5) * 100
                prog_bar.push(
                    <Progress value={value} style={{ marginBottom: '15px' }}>{obj}{' '}{skillObj[obj]}/5</Progress>
                )
            }
        }
        else {
            const uniqueSkills = this.getUniqueSkills()
            console.log(uniqueSkills)
            for (var obj in uniqueSkills){
                var value = (uniqueSkills[obj] / 5) * 100;
                prog_bar.push(
                    <Progress value={value} style={{ marginBottom: '15px' }}>{obj}{' '}{uniqueSkills[obj]}/5</Progress>
                )
            }
        }

        return (
            <div>
                <Header />
                <div className="container">
                    <div className="col-auto">
                        {/* <h1 style={{marginTop: '10px'}}>Hello, welcome to my website!</h1> */}
                        <Card style={{ width: '100%', marginTop: '100px', marginBottom: '50px' }}>
                            <CardBody>
                                <h2 style={{ marginTop: '10px', marginBottom: '20px', fontFamily: "Open Sans" }}>Resume</h2>
                                <Row style={{ marginLeft: '1px' }}>
                                    <h5 style={fontForHeadings} onClick={() => this.scrollToElement("education")}>Education</h5>
                                    <h5 style={fontForHeadings} onClick={() => this.scrollToElement("experience")}>Experience</h5>
                                    <h5 style={fontForHeadings} onClick={() => this.scrollToElement("skills")}>Skills</h5>
                                    <h5 style={fontForHeadings}>Courses</h5>
                                </Row>
                                <hr />
                                <Element name="education" />
                                <div className="App" style={{ marginTop: '40px', marginBottom: '30px' }}>
                                    <h5 style={font}><b>Education</b></h5>
                                </div>
                                <p style={font}>Bachelor of Technology, Computer Science and Engineering<br />Manipal Institute of Technology, 2019</p>
                                <Element name="experience" />
                                <div className="App" style={{ marginTop: '40px', marginBottom: '30px' }}>
                                    <h5 style={font}><b>Experience</b></h5>
                                </div>
                                <div style={{ marginBottom: '50px' }}>
                                    <h6 style={font}><b>Hewlett Packard Enterprise - R&D Engineer</b></h6>
                                    <p style={font}>July 2019 - Present</p>
                                    <ul style={{ padding: '0px 0px 0px 15px' }}>
                                        <li style={font}>Working in the 3PAR File Personna Team to develop a CLI interface for file storage</li>
                                        <li style={font}>Understanding the product end-to-end by developing features and testing their functionality</li>
                                    </ul>
                                </div>
                                <div style={{ marginBottom: '50px' }}>
                                    <h6 style={font}><b>Hewlett Packard Enterprise - R&D Intern</b></h6>
                                    <p style={font}>January 2019 - July 2019</p>
                                    <ul style={{ padding: '0px 0px 0px 15px' }}>
                                        <li style={font}>Worked in the Nimble Storage Team to develop a web dashboard using Flask, Reactjs and MySQL to visualize and track test suite execution for all Nimble products</li>
                                        <li style={font}>Containerised the website for hosting using Docker into 3 containers - NGINX web server, uwsgi-nginx-flask web server and MySQL server</li>
                                    </ul>
                                </div>
                                <div style={{ marginBottom: '50px' }}>
                                    <h6 style={font}><b>Hewlett Packard Enterprise - R&D Intern</b></h6>
                                    <p style={font}>January 2019 - July 2019</p>
                                    <ul style={{ padding: '0px 0px 0px 15px' }}>
                                        <li style={font}>Worked in the Nimble Storage Team to develop a web dashboard using Flask, Reactjs and MySQL to visualize and track test suite execution for all Nimble products</li>
                                        <li style={font}>Containerised the website for hosting using Docker into 3 containers - NGINX web server, uwsgi-nginx-flask web server and MySQL server</li>
                                    </ul>
                                </div>
                                <div style={{ marginBottom: '50px' }}>
                                    <h6 style={font}><b>Hochschule Emden/Leer - Summer Research Intern</b></h6>
                                    <p style={font}>May 2018 - July 2018</p>
                                    <ul style={{ padding: '0px 0px 0px 15px' }}>
                                        <li style={font}>Worked with Professor Juho Mäkiö under a DAAD grant to research on the viability of the Constrainted Application Protocol (CoAP) in the use of IoT networks with low power nodes</li>
                                        <li style={font}>Coded device drivers in C for the INA219 sensor to read node current and voltage readings and MAX17043 sensor to get battery readings</li>
                                        <li style={font}>Developed a python CoAP web-server using CoAPthon to service and store incoming sensor readings from remote nodes</li>
                                        <li style={font}>Contributed to the open-source RIOT operating system repo by adding support for the drivers mentioned above</li>
                                    </ul>
                                </div>
                                <div>
                                    <h6 style={font}><b>TripOffbeat - Software development Intern</b></h6>
                                    <p style={font}>May 2017 - July 2017</p>
                                    <ul style={{ padding: '0px 0px 0px 15px' }}>
                                        <li style={font}>Developed an Android application to assist the sales team to serve clients</li>
                                        <li style={font}>Increased the overall efficiency of the sales team by allowing quicker access to resort information and also automated receipt generation</li>
                                        <li style={font}>Got introduced to the REST framework and developed API's in PHP for the app to fetch data from the database</li>
                                        <li style={font}>Modified the MySQL database by introducing tables to allow authentication</li>
                                    </ul>
                                </div>
                                <Element name="skills" />
                                <div className="App" style={{ marginTop: '40px', marginBottom: '30px' }}>
                                    <h5 style={font}><b>Skills</b></h5>
                                </div>
                                <div style={{ marginBottom: '50px' }} className="App">
                                    {buttons}
                                </div>
                                <div>
                                    {prog_bar}
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
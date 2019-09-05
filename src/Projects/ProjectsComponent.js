import React, { Component } from 'react'
import Header from '../HeaderComponent'
import Footer from '../FooterComponent'
import {
    Row, Col
} from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import snowy from '../assets/snowy.jpg'
import nstsnowy from '../assets/nstsnowy.jpg'
import yolo from '../assets/yolov2.jpg'
import pan from '../assets/pan.jpg'
import word2vec from '../assets/word2vec.png'
import alexa from '../assets/alexa.jpg'
import chat from '../assets/chat.jpg'
import signlang from '../assets/signlang.png'
import mergesort from '../assets/mergesort.png'
import catvdogs from '../assets/catvdogs.jpg'

class Projects extends Component {

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="col-auto">
                        {/* <h1 style={{marginTop: '10px'}}>Hello, welcome to my website!</h1> */}
                        {/* <Card style={{ width: '100%', marginTop: '100px', marginBottom: '30px' }}>
                            <CardBody> */}
                        <h2 style={{ marginTop: '100px', marginBottom: '20px', fontFamily: "Raleway" }}><b>Projects</b></h2>
                        <p style={{ fontFamily: "Raleway", fontWeight: "300" }}>A selection of some of my projects</p>
                        <hr />
                        <VerticalTimeline layout="1-column">
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2011 - present"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                                <Row>
                                    <Col sm="3" md="3" lg="3" style={{ textAlign: "center" }}>
                                        <img src={pan} style={{ height: "auto", width: "100%", marginTop: "10px" }} />
                                    </Col>
                                    <Col md="9" lg="9" style={{ textAlign: "left" }}>
                                        <h3 className="vertical-timeline-element-title" style={{ fontFamily: "Raleway", marginTop: "10px" }}>Anomaly detection in a panoramic mouth X-ray</h3>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            Worked under Dr. Srikanth Prabhu to develop a CNN to classify a dental x-ray as either 'standard' or 'anomalous' based on the number of teeth in
                                            the mouth and their position.
                                        </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2011 - present"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                                <Row>
                                    <Col sm="3" md="3" lg="3" style={{ textAlign: "center" }}>
                                        <img src={word2vec} style={{ height: "auto", width: "100%", marginTop: "10px" }} />
                                    </Col>
                                    <Col md="9" lg="9" style={{ textAlign: "left" }}>
                                        <h3 className="vertical-timeline-element-title" style={{ fontFamily: "Raleway", marginTop: "10px" }}>Semantic similarity between short paragraphs</h3>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            Currently working under Professor Muralikrishna SN to develop an algorithm to detect similarity between two small paragraphs, consisting of multiple sentences, by extending the MaLSTM approach
                                                to detect sentence similarity.
                                        </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2011 - present"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                                <Row>
                                    <Col sm="3" md="3" lg="3" style={{ textAlign: "center" }}>
                                        <img src={nstsnowy} style={{ height: "auto", width: "100%", marginTop: "10px" }} />
                                    </Col>
                                    <Col md="9" lg="9" style={{ textAlign: "left" }}>
                                        <h3 className="vertical-timeline-element-title" style={{ fontFamily: "Raleway", marginTop: "10px" }}>Neural Style Transfer Algorithm</h3>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            Using a CNN, I implemented the NST algorithm to generate a new image from two input images by taking the
                                                    content of the first image and the style of the second. This is a picture of my pup generated using the Starry Night by Van Gogh!
                                             </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2011 - present"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                                <Row>
                                    <Col sm="3" md="3" lg="3" style={{ textAlign: "center" }}>
                                        <img src={yolo} style={{ height: "auto", width: "100%", marginTop: "10px" }} />
                                    </Col>
                                    <Col md="9" lg="9" style={{ textAlign: "left" }}>
                                        <h3 className="vertical-timeline-element-title" style={{ fontFamily: "Raleway", marginTop: "10px" }}>YOLOv2</h3>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            Implemented the You Only Look Once (YOLOv2) algorithm for object detection using a CNN. The bounding box accuracy was increased using Non-Max Suppression.
                                            </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2011 - present"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                                <Row>
                                    <Col sm="3" md="3" lg="3" style={{ textAlign: "center" }}>
                                        <img src={alexa} style={{ height: "auto", width: "100%", marginTop: "10px" }} />
                                    </Col>
                                    <Col md="9" lg="9" style={{ textAlign: "left" }}>
                                        <h3 className="vertical-timeline-element-title" style={{ fontFamily: "Raleway", marginTop: "10px" }}>Trigger word detection</h3>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            Developed a deep learning model to detect a spoken trigger word. Implemeted the model using a 1 convolutional layer and 2 GRU layers.
                                           </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2011 - present"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                                <Row>
                                    <Col sm="3" md="3" lg="3" style={{ textAlign: "center" }}>
                                        <img src={chat} style={{ height: "auto", width: "100%", marginTop: "10px" }} />
                                    </Col>
                                    <Col md="9" lg="9" style={{ textAlign: "left" }}>
                                        <h3 className="vertical-timeline-element-title" style={{ fontFamily: "Raleway", marginTop: "10px" }}>ChatApp</h3>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            Made an Android chat application with real time messaging and push notifications as a friend of mine and I were bored of using traditional chat applications.
                                            </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2011 - present"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                                <Row>
                                    <Col sm="3" md="3" lg="3" style={{ textAlign: "center" }}>
                                        <img src={signlang} style={{ height: "auto", width: "100%", marginTop: "10px" }} />
                                    </Col>
                                    <Col md="9" lg="9" style={{ textAlign: "left" }}>
                                        <h3 className="vertical-timeline-element-title" style={{ fontFamily: "Raleway", marginTop: "10px" }}>Sign Language detection</h3>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            Worked on making a CNN to detect sign language alphabets in a given image.
                                    </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2011 - present"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                                <Row>
                                    <Col sm="3" md="3" lg="3" style={{ textAlign: "center" }}>
                                        <img src={mergesort} style={{ height: "auto", width: "100%", marginTop: "10px" }} />
                                    </Col>
                                    <Col md="9" lg="9" style={{ textAlign: "left" }}>
                                        <h3 className="vertical-timeline-element-title" style={{ fontFamily: "Raleway", marginTop: "10px" }}>Merge sort using mutlithreading</h3>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            Implemented a mutli-threaded merge sort to demonstrate the use of multi-threading in my OS class.
                                    </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2011 - present"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                                <Row>
                                    <Col sm="3" md="3" lg="3" style={{ textAlign: "center" }}>
                                        <img src={catvdogs} style={{ height: "auto", width: "100%", marginTop: "10px" }} />
                                    </Col>
                                    <Col md="9" lg="9" style={{ textAlign: "left" }}>
                                        <h3 className="vertical-timeline-element-title" style={{ fontFamily: "Raleway", marginTop: "10px" }}>Cats vs Dogs classifier</h3>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            Got introduced to CNNs by making one to classify an input image as either a cat or a dog.
                                    </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            {/* <Card>
                                <CardTitle style={{ fontFamily: "Raleway", marginLeft: "15px", marginTop: "30px" }}>Cats vs Dogs classifier</CardTitle>
                                <CardSubtitle style={{ marginLeft: "15px", marginTop: "5px", fontFamily: "Raleway", fontWeight: "300" }}>December 2018</CardSubtitle>
                                <CardBody>
                                    <div style={{ textAlign: "center", marginBottom: "10px" }}>
                                        <CardImg top src={catvdogs} alt="Cats vs dogs" />
                                    </div>
                                    <span style={{ fontFamily: "Source Sans Pro" }}>
                                        Got introduced to CNNs by making one to classify an input image as either a cat or a dog.
                                                </span>
                                </CardBody>
                            </Card> */}
                        </VerticalTimeline>
                        {/* </CardBody>
                        </Card> */}
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}

export default Projects;
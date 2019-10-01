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
import { FaDog, FaTooth, FaSignLanguage, FaCar, FaMicrophone, FaPaintBrush, FaAndroid, FaCode } from 'react-icons/fa'
import { MdLanguage } from 'react-icons/md'

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
                        <p style={{ fontFamily: "Raleway" }}>A selection of some of my projects</p>
                        <hr />
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="July 2019 - present"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<MdLanguage />}>
                                <Row>
                                    <Col style={{ textAlign: "center" }}>
                                        <img src={word2vec} style={{ height: "auto", width: "100%", marginTop: "10px" }} alt="Word2Vec" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: "left" }}>
                                        <h4 style={{ fontFamily: "Raleway", marginTop: "20px" }}><b>Semantic similarity between short paragraphs</b></h4>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            I am currently working under Professor Muralikrishna SN to develop an algorithm to detect similarity between two small paragraphs consisting of multiple sentences.
                                            We are implementing this by extending an existing approach to detect single-sentence similarity using two LSTMs in a Siamese architecture.
                                        </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="March 2019"
                                iconStyle={{ background: '#228B22', color: '#fff' }}
                                icon={<FaPaintBrush />}>
                                <Row>
                                    <Col style={{ textAlign: "center" }}>
                                        <img src={nstsnowy} style={{ height: "auto", width: "100%", marginTop: "10px" }} alt="NST algo" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: "left" }}>
                                        <h4 style={{ fontFamily: "Raleway", marginTop: "20px" }}><b>Neural Style Transfer Algorithm</b></h4>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            Using a CNN, I implemented the NST algorithm to generate a new image from two input images by taking the
                                                    content of the first image and the style of the second. This is a picture of my pup generated using the Starry Night by Van Gogh!
                                             </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="January 2019 - March 2019"
                                iconStyle={{ background: '#57a0d3', color: '#fff' }}
                                icon={<FaMicrophone />}>
                                <Row>
                                    <Col style={{ textAlign: "center" }}>
                                        <img src={alexa} style={{ height: "auto", width: "100%", marginTop: "10px" }} alt="Trigger word" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: "left" }}>
                                        <h4 style={{ fontFamily: "Raleway", marginTop: "20px" }}><b>Trigger word detection</b></h4>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>

                                            I have developed a deep learning model to detect a spoken trigger word. I implemented the model using 1 convolutional layer and 2 GRU layers.
                                            </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="January 2019 - February 2019"
                                iconStyle={{ background: '#FFAA1D', color: "#fff" }}
                                icon={<FaCar />}>
                                <Row>
                                    <Col style={{ textAlign: "center" }}>
                                        <img src={yolo} style={{ height: "auto", width: "100%", marginTop: "10px" }} alt="YOLOv2" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: "left" }}>
                                        <h4 style={{ fontFamily: "Raleway", marginTop: "20px" }}><b>YOLOv2</b></h4>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            Implemented the You Only Look Once (YOLOv2) algorithm for object detection using a CNN. The bounding box accuracy was increased using Non-Max Suppression.
                                            </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="December 2018 - January 2019"
                                iconStyle={{ background: '#000080', color: '#fff' }}
                                icon={<FaSignLanguage />}>
                                <Row>
                                    <Col style={{ textAlign: "center" }}>
                                        <img src={signlang} style={{ height: "auto", width: "50%", marginTop: "10px" }} alt="Sign language" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: "left" }}>
                                        <h4 style={{ fontFamily: "Raleway", marginTop: "20px" }}><b>Sign Language detection</b></h4>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            I have worked on making a CNN to detect sign language alphabets in a given image.
                                    </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="July 2017 - October 2018"
                                iconStyle={{ background: '#d00000', color: '#fff' }}
                                icon={<FaTooth />}>
                                <Row>
                                    <Col style={{ textAlign: "center" }}>
                                        <img src={pan} style={{ height: "auto", width: "100%", marginTop: "10px" }} alt="Panoramic X-ray" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: "left" }}>
                                        <h4 className="vertical-timeline-element-title" style={{ fontFamily: "Raleway", marginTop: "20px" }}><b>Anomaly detection in a panoramic mouth X-ray</b></h4>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            I have worked under Dr Srikanth Prabhu to develop a CNN to classify a dental x-ray as either 'standard' or 'anomalous'
                                            based on the number of teeth in the mouth and their position.
                                        </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="January 2018"
                                iconStyle={{ background: '#EE7600', color: '#fff' }}
                                icon={<FaDog />}>
                                <Row>
                                    <Col style={{ textAlign: "center" }}>
                                        <img src={catvdogs} style={{ height: "auto", width: "100%", marginTop: "10px" }} alt="Cats vs dogs" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: "left" }}>
                                        <h4 className="vertical-timeline-element-title" style={{ fontFamily: "Raleway", marginTop: "20px" }}><b>Cats vs Dogs classifier</b></h4>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            Got introduced to CNNs by making one to classify an input image as either a cat or a dog.
                                    </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="October 2017"
                                iconStyle={{ background: '#393f4d', color: '#fff' }}
                                icon={<FaCode />}>
                                <Row>
                                    <Col style={{ textAlign: "center" }}>
                                        <img src={mergesort} style={{ height: "auto", width: "100%", marginTop: "10px" }} alt="Merge sort" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: "left" }}>
                                        <h4 className="vertical-timeline-element-title" style={{ fontFamily: "Raleway", marginTop: "20px" }}><b>Multithreaded merge-sort</b></h4>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            I have implemented a multi-threaded merge sort to demonstrate the use of multi-threading in my OS class.
                                    </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="August 2016 - November 2016"
                                iconStyle={{ background: '#3DDB86', color: '#fff' }}
                                icon={<FaAndroid />}>
                                <Row>
                                    <Col style={{ textAlign: "center" }}>
                                        <img src={chat} style={{ height: "auto", width: "100%", marginTop: "10px" }} alt="ChatApp" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: "left" }}>
                                        <h4 className="vertical-timeline-element-title" style={{ fontFamily: "Raleway", marginTop: "10px" }}><b>ChatApp</b></h4>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            Made an Android chat application with real-time messaging and push notifications as a friend of mine and I were bored of using traditional chat applications.
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
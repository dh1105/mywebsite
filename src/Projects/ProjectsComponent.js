import React, { Component } from 'react'
import Header from '../HeaderComponent'
import Footer from '../FooterComponent'
import {
    Card, CardTitle, CardSubtitle, CardBody, CardImg, CardColumns
} from 'reactstrap';
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
                        <Card style={{ width: '100%', marginTop: '100px', marginBottom: '30px' }}>
                            <CardBody>
                                <h2 style={{ marginTop: '10px', marginBottom: '20px', fontFamily: "Raleway" }}><b>Projects</b></h2>
                                <p style={{ fontFamily: "Raleway", fontWeight: "300" }}>A selection of some of my projects</p>
                                <hr />
                                <CardColumns>
                                    <Card>
                                        <CardTitle style={{ fontFamily: "Raleway", marginLeft: "15px", marginTop: "30px" }}>Anomaly detection in a panoramic mouth X-ray</CardTitle>
                                        <CardSubtitle style={{ marginLeft: "15px", marginTop: "5px", fontFamily: "Raleway", fontWeight: "300" }}>August 2018</CardSubtitle>
                                        <CardBody>
                                            <div style={{ textAlign: "center", marginBottom: "10px" }}>
                                                <CardImg top src={pan} alt="Panoramic x-ray" />
                                            </div>
                                            <span style={{ fontFamily: "Source Sans Pro" }}>
                                                Worked under Dr. Srikanth Prabhu to develop a CNN to classify a dental x-ray as either 'standard' or 'anomalous' based on the number of teeth in
                                                the mouth and their position.
                                            </span>
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <CardTitle style={{ fontFamily: "Raleway", marginLeft: "15px", marginTop: "30px" }}>Semantic similarity between <br/>short paragraphs</CardTitle>
                                        <CardSubtitle style={{ marginLeft: "15px", marginTop: "5px", fontFamily: "Raleway", fontWeight: "300" }}>August 2019</CardSubtitle>
                                        <CardBody>
                                            <div style={{ textAlign: "center", marginBottom: "10px" }}>
                                                <CardImg top src={word2vec} alt="Image generated using the NST algorithm" />
                                            </div>
                                            <span style={{ fontFamily: "Source Sans Pro" }}>
                                                Currently working under Professor Muralikrishna SN to develop an algorithm to detect similarity between two small paragraphs, consisting of multiple sentences, by extending the MaLSTM approach
                                                to detect sentence similarity.
                                            </span>
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <CardTitle style={{ fontFamily: "Raleway", marginLeft: "15px", marginTop: "30px" }}>Neural Style Transfer Algorithm</CardTitle>
                                        <CardSubtitle style={{ marginLeft: "15px", marginTop: "5px", fontFamily: "Raleway", fontWeight: "300" }}>March 2019</CardSubtitle>
                                        <CardBody>
                                            <div style={{ textAlign: "center", marginBottom: "10px" }}>
                                                <CardImg top src={nstsnowy} alt="Image generated using the NST algorithm" />
                                            </div>
                                            <span style={{ fontFamily: "Source Sans Pro" }}>
                                                Using a CNN, I implemented the NST algorithm to generate a new image from two input images by taking the
                                                content of the first image and the style of the second. This is a picture of my pup generated using the Starry Night by Van Gogh!
                                            </span>
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <CardTitle style={{ fontFamily: "Raleway", marginLeft: "15px", marginTop: "30px" }}>YOLOv2</CardTitle>
                                        <CardSubtitle style={{ marginLeft: "15px", marginTop: "5px", fontFamily: "Raleway", fontWeight: "300" }}>February 2019</CardSubtitle>
                                        <CardBody>
                                            <div style={{ textAlign: "center", marginBottom: "10px" }}>
                                                <CardImg top src={yolo} alt="YOLOv2 bounding box" />
                                            </div>
                                            <span style={{ fontFamily: "Source Sans Pro" }}>
                                                Implemented the You Only Look Once (YOLOv2) algorithm for object detection using a CNN. The bounding box accuracy was increased using Non-Max Suppression.
                                            </span>
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <CardTitle style={{ fontFamily: "Raleway", marginLeft: "15px", marginTop: "30px" }}>Trigger word detection</CardTitle>
                                        <CardSubtitle style={{ marginLeft: "15px", marginTop: "5px", fontFamily: "Raleway", fontWeight: "300" }}>January 2019</CardSubtitle>
                                        <CardBody>
                                            <div style={{ textAlign: "center", marginBottom: "10px" }}>
                                                <CardImg top src={alexa} alt="Alexa, a device using this algorithm" />
                                            </div>
                                            <span style={{ fontFamily: "Source Sans Pro" }}>
                                                Developed a deep learning model to detect a spoken trigger word. Implemeted the model using a 1 convolutional layer and 2 GRU layers.
                                            </span>
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <CardTitle style={{ fontFamily: "Raleway", marginLeft: "15px", marginTop: "30px" }}>ChatApp</CardTitle>
                                        <CardSubtitle style={{ marginLeft: "15px", marginTop: "5px", fontFamily: "Raleway", fontWeight: "300" }}>August 2017</CardSubtitle>
                                        <CardBody>
                                            <div style={{ textAlign: "center", marginBottom: "10px" }}>
                                                <CardImg top src={chat} alt="Sample UI of the chatapp" />
                                            </div>
                                            <span style={{ fontFamily: "Source Sans Pro" }}>
                                                Made an Android chat application with real time messaging and push notifications as a friend of mine and I were bored of using traditional chat applications.
                                            </span>
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <CardTitle style={{ fontFamily: "Raleway", marginLeft: "15px", marginTop: "30px" }}>Sign Language detection</CardTitle>
                                        <CardSubtitle style={{ marginLeft: "15px", marginTop: "5px", fontFamily: "Raleway", fontWeight: "300" }}>January 2019</CardSubtitle>
                                        <CardBody>
                                            <div style={{ textAlign: "center", marginBottom: "10px" }}>
                                                <CardImg top src={signlang} alt="Sign Language alphabet" />
                                            </div>
                                            <span style={{ fontFamily: "Source Sans Pro" }}>
                                                Worked on making a CNN to detect sign language alphabets in a given image.
                                            </span>
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <CardTitle style={{ fontFamily: "Raleway", marginLeft: "15px", marginTop: "30px" }}>Merge sort using mutlithreading</CardTitle>
                                        <CardSubtitle style={{ marginLeft: "15px", marginTop: "5px", fontFamily: "Raleway", fontWeight: "300" }}>October 2017</CardSubtitle>
                                        <CardBody>
                                            <div style={{ textAlign: "center", marginBottom: "10px" }}>
                                                <CardImg top src={mergesort} alt="Merge sort" />
                                            </div>
                                            <span style={{ fontFamily: "Source Sans Pro" }}>
                                                Implemented a mutli-threaded merge sort to demonstrate the use of multi-threading in my OS class.
                                            </span>
                                        </CardBody>
                                    </Card>
                                    <Card>
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
                                    </Card>
                                </CardColumns>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}

export default Projects;
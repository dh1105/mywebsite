import React, { Component } from 'react'
import Header from '../HeaderComponent'
import Footer from '../FooterComponent'
import {
    Row, Col
} from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import snowy from '../assets/snowy.jpg'
import nstsnowy from '../assets/nstsnowy.jpg'
import pan from '../assets/pan.jpg'
import word2vec from '../assets/word2vec.png'
import chat from '../assets/chat.jpg'
import mergesort from '../assets/mergesort.png'
import pinkfloyd from '../assets/pinkfloyd.jpg'
import reddit from '../assets/reddit_logo.png'
import poster from '../assets/dark.jpg'
import sentenceEntailment from '../assets/sentence_entailment.png'
import { FaTooth, FaPaintBrush, FaAndroid, FaCode, FaMusic, FaReddit, FaFilm } from 'react-icons/fa'
import { MdTextFields } from 'react-icons/md'
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
                        <h2 style={{ marginTop: '100px', marginBottom: '20px', fontFamily: "Raleway" }}><b>Projects</b></h2>
                        <p style={{ fontFamily: "Raleway" }}>A selection of some of my projects</p>
                        <hr />
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="October 2020 - Present"
                                iconStyle={{ background: 'rgb(0, 35, 102)', color: '#fff' }}
                                icon={<MdTextFields />}>
                                <Row>
                                    <Col style={{ textAlign: "center" }}>
                                        <img src={sentenceEntailment} style={{ height: "auto", width: "100%", marginTop: "10px" }} alt="Word2Vec" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: "left" }}>
                                        <h4 className="vertical-timeline-element-title resume-heading" style={{ fontFamily: "Raleway", marginTop: "20px" }}>
                                            <a target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }} href="https://github.com/dh1105/Sentence-Entailment">
                                                <b>Sentence Entailment on the MultiNLI and SNLI datasets</b>
                                            </a>
                                        </h4>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            <ul style={{ paddingLeft: "15px" }}>
                                                <li>
                                                    Currently working on benchmarking Deep Learning models such as BiLSTMs, BERT, CNN-LSTMs on the task of sentence
                                                    entailment using two prominent textual entailment datasets - MultiNLI and SNLI.
                                                </li>
                                                <li>
                                                    Experimentanlly trying to achieve the performance of above mentioned models as reported in the paper 'A Broad-Coverage Challenge Corpus for
                                                    Sentence Understanding through Inference' by Bowman et al..
                                                </li>
                                                <li>
                                                    Implementing attention mechanisms such as max-pooling attention and symbolic similarity attention. Additionally working on incorporating contextual ELMO and BERT
                                                    embeddings in the BiLSTM models with attention to check for any performance gain.
                                                </li>
                                            </ul>
                                        </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="July 2019 - May 2020"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<MdLanguage />}>
                                <Row>
                                    <Col style={{ textAlign: "center" }}>
                                        <img src={word2vec} style={{ height: "auto", width: "100%", marginTop: "10px" }} alt="Word2Vec" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: "left" }}>
                                        <h4 style={{ fontFamily: "Raleway", marginTop: "20px" }}><b>Semantic similarity between short paragraphs using
Deep Learning</b></h4>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            <ul style={{ paddingLeft: "15px" }}>
                                                <li>
                                                    Worked under Professor Muralikrishna SN of the Department of Computer Science and Engineering at MIT, Manipal to evaluate the performance of
                                                    Siamese LSTMs to detect similarity between two small paragraphs consisting of multiple sentences. The model was trained using Doc2Vec embeddings trained on our dataset -
                                                    the Quora Question Pairs dataset.
                                                </li>
                                                <li>
                                                    Used three evaluation functions to compute the similarity between two inputs - The Manhattan distance, the Euclidean distance and the Cosine distance.
                                                    Got an accuracy of 0.83, 0.83 and 0.76 for each function respectively.
                                                </li>
                                                <li>
                                                    Our work has been accepted as a paper in the 6th IEEE International Conference on Electronics, Computing and Communication Technologies in 2020.
                                                </li>
                                            </ul>
                                        </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="March 2020 - May 2020"
                                iconStyle={{ background: '#222222', color: '#fff' }}
                                icon={<FaFilm />}>
                                <Row>
                                    <Col style={{ textAlign: "center" }}>
                                        <img src={poster} style={{ height: "auto", width: "60%", marginTop: "10px" }} alt="Word2Vec" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: "left" }}>
                                        <h4 className="vertical-timeline-element-title resume-heading" style={{ fontFamily: "Raleway", marginTop: "20px" }}>
                                            <a target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }} href="https://github.com/dh1105/Multi-modal-movie-genre-prediction">
                                                <b>Multimodal deep learning to predict movie genres</b>
                                            </a>
                                        </h4>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            <ul style={{ paddingLeft: "15px" }}>
                                                <li>
                                                    Developed a multimodal deep learning model implemented in Pytorch trained to predict a movie's genre.
                                                    The inputs are the poster and the movie summary. The output has 18 sigmoid
                                                    units each unit corresponding to a genre.
                                                </li>
                                                <li>
                                                    Keras was used for a baseline model which was then improved using pytorch.
                                                    The evaluation metrics used include accuracy, loss,
                                                    recall, precision, f1 score, Hamming loss and ROC AUC score. An article about the
                                                    project can be found <span className="course"><a target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }} href="https://towardsdatascience.com/multimodal-deep-learning-to-predict-movie-genres-e6855f814a8a"><u>here</u></a></span>.
                                                </li>
                                                <li>
                                                    Improved the ROC AUC score from 0.75 to 0.80, improved the F1 score from 0.41 to 0.50, improved the recall score
                                                    from 0.39 to 0.57 and precision score from 0.51 to 0.52. The final testing accuracy was 0.87 with a loss of 0.34. The
                                                    Hamming loss achieved was 0.11.
                                                    </li>
                                            </ul>
                                        </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="March 2020 - April 2020"
                                iconStyle={{ background: '#fff', color: '#FF5700' }}
                                icon={<FaReddit />}>
                                <Row>
                                    <Col style={{ textAlign: "center" }}>
                                        <img src={reddit} style={{ height: "auto", width: "50%", marginTop: "10px" }} alt="Reddit flair classification" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: "left" }}>
                                        <h4 className="vertical-timeline-element-title resume-heading" style={{ fontFamily: "Raleway", marginTop: "20px" }}>
                                            <a target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }} href="https://github.com/dh1105/Reddit-flair-classifier">
                                                <b>Reddit flair classification</b>
                                            </a>
                                        </h4>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            <ul style={{ paddingLeft: "15px" }}>
                                                <li>
                                                    Built a reactjs app with a flask backend which classifies
                                                    reddit posts from r/india using logistic regression into 6 flair categories -
                                                    'Coronavirus', 'Science/Technology', 'Policy/Economy', 'Politics', 'Non-Political' and 'AskIndia'.
                                                    The webapp can be found <span className="course"><a target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }} href="https://dh1105.github.io/Reddit-flair-classifier-frontend/#/home"><u>here</u></a></span>.
                                                </li>
                                                <li>
                                                    Four models were trained as baseline models using a combination of the 'title' and 'post body' as a feature.
                                                    The Logistic regression model performed the best out of these four with an accuracy of 0.60.
                                                </li>
                                                <li>
                                                    Four LSTM model's were also trained. Each a different word embedding layer - word2vec, GloVe, Fasttext and a trainable embedding layer.
                                                    The word2vec model outperformed the others with a final accuracy of 0.52.
                                                </li>
                                            </ul>
                                        </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="July 2017 - February 2020"
                                iconStyle={{ background: '#d00000', color: '#fff' }}
                                icon={<FaTooth />}>
                                <Row>
                                    <Col style={{ textAlign: "center" }}>
                                        <img src={pan} style={{ height: "auto", width: "100%", marginTop: "10px" }} alt="Panoramic X-ray" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: "left" }}>
                                        <h4 className="vertical-timeline-element-title" style={{ fontFamily: "Raleway", marginTop: "20px" }}><b>Anomaly detection in a panoramic dental X-rays using machine learning</b></h4>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            <ul style={{ paddingLeft: "15px" }}>
                                                <li>
                                                    Worked under Dr Srikanth Prabhu of the Department of Computer Science and Engineering at MIT, Manipal and the Kasturba medical hospital's
                                                    dental department to develop a machine learning model to
                                                    classify a panoramic dental x-ray as either 'standard' or 'anomalous'
                                                    based on caries detection, number of teeth and bone loss. The dataset
                                                    was labeled by Dr Sunaina Puri and it consisted of over 600 images.
                                                </li>
                                                <li>
                                                    The baseline model was an SVM which achieved an accuracy of
                                                    0.65 with a recall score of 0.79 and precision of 0.63.
                                                </li>
                                                <li>
                                                    The final model used a multi-layered convolutional neural network trained on the dataset
                                                    as a feature extractor. These features were then fed to an SVM to classify the image.
                                                    Final accuracy was 0.98, recall was 0.97 and precision was 0.99.
                                                </li>
                                            </ul>
                                        </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="October 2019"
                                iconStyle={{ background: 'rgb(153, 50, 204)', color: '#fff' }}
                                icon={<FaMusic />}>
                                <Row>
                                    <Col style={{ textAlign: "center" }}>
                                        <img src={pinkfloyd} style={{ height: "auto", width: "100%", marginTop: "10px" }} alt="Pink Floyd" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: "left" }}>
                                        <h4 className="vertical-timeline-element-title resume-heading" style={{ fontFamily: "Raleway", marginTop: "20px" }}>
                                            <a target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }} href="https://github.com/dh1105/Pink-Floyd-lyrics-LSTM">
                                                <b>Pink Floyd lyric generator</b>
                                            </a>
                                        </h4>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            <ul style={{ paddingLeft: "15px" }}>
                                                <li>
                                                    Using an LSTM, I generated lyrics for potential songs by one of my favourite bands - Pink Floyd.
                                                    The dataset was made by scraping song lyrics off the internet and pre-prosessing the lyrics in sequence windows of 51
                                                    words each. This resulted in an n-gram model which would look at an input sequence and predict the next word.
                                                    This helped overcome the problem of data scarcity and helped generate texts at a word level rather than character level.
                                                    After 100 epochs of training, this is output I got.
                                                </li>
                                                <li>
                                                    The seed text: ticking away the moments that make up a dull day you fritter and waste the hours in an offhand way
                                                </li>
                                                <li>
                                                    The model's output: kicking around on the storyline if kind yea did we were a holiday and all the pieces cheered on tidings turned back in derilict sidings the poppies entwine with cattle trucks lying in desire to caution is not the beating of your button the leaves cheat many one smiled to
                                                </li>
                                            </ul>
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
                                        <h4 className="vertical-timeline-element-title resume-heading" style={{ fontFamily: "Raleway", marginTop: "20px" }}>
                                            <a target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }} href="https://github.com/dh1105/NSTalgo">
                                                <b>Neural Style Transfer Algorithm</b>
                                            </a>
                                        </h4>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            <ul style={{ paddingLeft: "15px" }}>
                                                <li>
                                                    Using a CNN, implemented the Neural Style Transfer algorithm in MATLAB by Gatys et al (2015) to generate a new image from two input images by taking the
                                                    content of the first image and the style of the second. This is a picture of my pup generated using the Starry Night by Van Gogh!
                                                </li>
                                            </ul>
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
                                        <h4 className="vertical-timeline-element-title resume-heading" style={{ fontFamily: "Raleway", marginTop: "20px" }}>
                                            <a target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }} href="https://github.com/dh1105/Mergesort-multithreading">
                                                <b>Multithreaded merge-sort</b>
                                            </a>
                                        </h4>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            <ul style={{ paddingLeft: "15px" }}>
                                                <li>
                                                    Implemented a multi-threaded merge sort to demonstrate the use of multi-threading in my OS class.
                                                </li>
                                                <li>
                                                    The algorithm created a thread for each subarray and these threads were then used to sort and join each element to formt the sorted array.
                                                </li>
                                            </ul>
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
                                        <h4 className="vertical-timeline-element-title resume-heading" style={{ fontFamily: "Raleway", marginTop: "10px" }}>
                                            <a target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }} href="https://github.com/dh1105/ChatApp">
                                                <b>ChatApp</b>
                                            </a>
                                        </h4>
                                        <p style={{ fontFamily: "Source Sans Pro" }}>
                                            <ul style={{ paddingLeft: "15px" }}>
                                                <li>
                                                    Made an Android chat application with real-time messaging and push notifications as a friend of mine and I were bored of using traditional chat applications.
                                                </li>
                                                <li>
                                                    Extensively got to use and learn about firebase and the Android SDK.
                                                </li>
                                            </ul>
                                        </p>
                                    </Col>
                                </Row>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}

export default Projects;
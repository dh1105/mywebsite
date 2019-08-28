import React, { Component } from 'react'
import Header from '../HeaderComponent'
import Footer from '../FooterComponent'
import { Card, CardBody } from 'reactstrap';

class Home extends Component {

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
                                <h2 style={{marginTop: '10px', marginBottom: '20px', fontFamily: "Raleway", fontWeight: "400"}}><b>Hello, welcome to my website!</b></h2>
                                <hr />
                                <p style={{fontFamily: "Source Sans Pro", fontWeight: "300"}}>Please feel free to read a bit about me, or you can check out my resume, the projects I have done or you could contact me.</p>
                                <p>The source code can be found here</p>
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
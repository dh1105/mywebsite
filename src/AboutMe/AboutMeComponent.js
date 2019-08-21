import React, {Component} from 'react'
import Header from '../HeaderComponent'
import Footer from '../FooterComponent'

class AboutMe extends Component {

    render(){
        return(
            <div>
                <Header />
                About me
                <Footer />
            </div>
        )
    }
}

export default AboutMe;
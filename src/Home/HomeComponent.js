import React, {Component} from 'react'
import Header from '../HeaderComponent'
import Footer from '../FooterComponent'

class Home extends Component {

    render(){
        return(
            <div>
                <Header />
                Hello
                <Footer />
            </div>
        )
    }
}

export default Home;
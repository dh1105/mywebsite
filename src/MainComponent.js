import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import { history } from './_helpers';
import Home from './Home/HomeComponent'
// import AboutMe from './AboutMe/AboutMeComponent'
import Resume from './Resume/ResumeComponent'
import Projects from './Projects/ProjectsComponent'
import Contact from './Contact/ContactComponent'

class Main extends Component {

    render() {
        // const { alert } = this.props;
        return (
            <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route path="/home" component={Home} />
                    {/* <Route path="/about" component={AboutMe} /> */}
                    <Route path="/resume" component={Resume} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Main; 
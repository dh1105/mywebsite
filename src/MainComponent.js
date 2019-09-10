import React, { Component } from 'react';
import { Router, Switch, Route, Redirect, HashRouter } from 'react-router-dom';
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
            <HashRouter basename="/">
                <Router history={history}>
                    <Switch>
                        <Route path="/home" component={Home} />
                        {/* <Route path="/about" component={AboutMe} /> */}
                        <Route path="/resume" component={Resume} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/contact" component={Contact} />
                        <Redirect to="/home" />
                    </Switch>
                </Router>
            </HashRouter>
        );
    }
}

export default Main; 
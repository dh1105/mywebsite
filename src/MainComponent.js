import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
// import { history } from './_helpers';
import Home from './Home/HomeComponent'
// import AboutMe from './AboutMe/AboutMeComponent'
import Resume from './Resume/ResumeComponent'
import Projects from './Projects/ProjectsComponent'
import Contact from './Contact/ContactComponent'
import Publications from './Publications/PublicationsComponent'

class Main extends Component {

    render() {
        // const { alert } = this.props;
        return (
            <HashRouter>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/publications" component={Publications} />
                    <Route path="/contact" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
            </HashRouter>
        );
    }
}

export default Main; 
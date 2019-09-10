import React, { Component } from 'react';
import { Router, Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
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
            <div>
                {/* <div className="container">
                    {alert.message &&
                        <UncontrolledAlert color={alert.type}>{alert.message}</UncontrolledAlert>
                    }
                </div> */}
                <BrowserRouter>
                    <Router history={history}>
                        <Switch>
                            <Route path={process.env.PUBLIC_URL + "/home"} component={Home} />
                            {/* <Route path="/about" component={AboutMe} /> */}
                            <Route path={process.env.PUBLIC_URL + "/resume"} component={Resume} />
                            <Route path={process.env.PUBLIC_URL + "/projects"} component={Projects} />
                            <Route path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
                            <Redirect to={process.env.PUBLIC_URL + "/home"} />
                        </Switch>
                    </Router>
                </BrowserRouter>
            </div>
        );
    }
}

export default Main; 
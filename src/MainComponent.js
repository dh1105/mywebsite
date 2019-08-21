import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { history } from './_helpers';
import Home from './Home/HomeComponent'

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
                <Router history={history}>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Redirect to="/home" />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Main; 
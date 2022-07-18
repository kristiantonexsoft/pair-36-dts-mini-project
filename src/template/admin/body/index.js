import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"

import { 
     Dashboard} from "../../../pages/admin"

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
 
        return (
            <Switch>
            <Route exact path="/" component={props =>   <Dashboard {...props} />}/>
            {/* <Route path="/hakakses" component={props => <HakAkses {...props} />} /> */}
            </Switch>
        )
    }
}

export default Body;
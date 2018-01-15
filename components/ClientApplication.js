import React, {Component} from 'react'
//import Dashboard from "../components/dashboard/Dashboard";
import Dashboard from "../components/master/Master";

export default class ClientApplication extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("render: ClientApplication");
        return (
            <div>
                <Dashboard />
            </div>
        )
    }
}


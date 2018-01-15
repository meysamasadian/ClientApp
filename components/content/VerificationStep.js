import React, {Component} from 'react';
import {TextField} from "material-ui";



export default class VerificationStep extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return <div className="form-inline">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 align-items-start">
                        <TextField
                            className="col-md-12"
                            floatingLabelFixed=""
                            hintText="کد ارسالی"
                        />
                    </div>
                </div>
            </div>
        </div>
    }
}
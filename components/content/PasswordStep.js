import React, {Component} from 'react';
import {TextField} from "material-ui";



export default class PasswordStep extends Component {
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
                            hintText="رمز عبور"
                            type="password"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 align-items-start">
                        <TextField
                            className="col-md-12"
                            floatingLabelFixed=""
                            hintText="تکرار رمز عبور"
                            type="password"
                        />
                    </div>
                </div>
            </div>
        </div>
    }
}
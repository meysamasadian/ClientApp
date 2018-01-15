import React, {Component} from 'react';
import {TextField} from "material-ui";



export default class BasicStep extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return <div className="form-inline">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 align-items-start">
                        <TextField
                            className="col-md-12"
                            floatingLabelFixed=""
                            hintText="نام"
                        />
                    </div>
                    <div className="col-md-6 align-items-start">
                        <TextField
                            className="col-md-12"
                            floatingLabelFixed=""
                            hintText="نام خانوادگی"
                        />
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-6 align-items-start">
                        <TextField
                            className="col-md-12"
                            floatingLabelFixed=""
                            hintText="موبایل"
                        />
                    </div>
                    <div className="col-md-6">
                        <TextField
                            className="col-md-12 align-items-start"
                            floatingLabelFixed=""
                            hintText="ایمیل"
                        />
                    </div>
                </div>
            </div>
        </div>
    }
}
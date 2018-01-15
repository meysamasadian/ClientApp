import React, {Component} from 'react';
import {RadioButton, RadioButtonGroup, TextField} from "material-ui";
import PersonalWebOrderStepper from "./personal/PersonalWebOrderStepper";

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};

export default class PersonalWebOrderType extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="form-inline">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 align-items-start" style={{textAlign:'right'}}>
                        <span>سفارش وب سایت شخصی</span>
                    </div>
                </div>
            </div>
            <PersonalWebOrderStepper/>
        </div>
    }
}
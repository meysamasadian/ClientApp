import React, {Component} from 'react';
import {RadioButton, RadioButtonGroup, TextField} from "material-ui";

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};

export default class CompanyWebOrderType extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="form-inline">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 align-items-start" style={{textAlign:'right'}}>
                        <span>سفارش وب سایت استاتیک شرکتی</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <TextField
                            floatingLabelText="عنوان پروژه"
                        />
                    </div>
                </div>
            </div>
        </div>
    }
}
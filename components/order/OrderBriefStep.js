import React, {Component} from 'react';
import {RadioButton, RadioButtonGroup} from "material-ui";

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};

export default class OrderBriefStep extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="form-inline">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 align-items-start">
                        اینجا
                    </div>
                </div>
            </div>
        </div>
    }
}
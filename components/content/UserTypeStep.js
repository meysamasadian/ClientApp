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

export default class UserTypeStep extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="form-inline">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 align-items-start">
                        <RadioButtonGroup name="shipSpeed" defaultSelected="student">
                            <RadioButton
                                value="student"
                                label="دانشجوی"
                                style={styles.radioButton}
                            />
                            <RadioButton
                                value="real"
                                label="شخصی"
                                style={styles.radioButton}
                            />
                            <RadioButton
                                value="legal"
                                label="سازمانی یا شرکتی"
                                style={styles.radioButton}
                            />
                        </RadioButtonGroup>
                    </div>
                </div>
            </div>
        </div>
    }
}
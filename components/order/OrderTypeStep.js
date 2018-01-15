import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {RadioButton, RadioButtonGroup} from "material-ui";
import {STUDENT_TYPE,PERSONAL_WEB_TYPE,COMPANY_WEB_TYPE, SHOP_SITE_TYPE, SERVICE_SITE_TYPE, APPLICATION_TYPE, OTHER_TYPE} from './order_type'

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};

export default class OrderTypeStep extends Component {
    static propTypes = {
        changeType : PropTypes.func
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, value) {
        console.log("handleChange",value);
        this.props.changeType(value);
    }

    render() {
        return <div className="form-inline">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 align-items-start">
                        <RadioButtonGroup name="shipSpeed" defaultSelected="STUDENT_TYPE" onChange={this.handleChange}>
                            <RadioButton
                                value={STUDENT_TYPE}
                                label="پروژه دانشجویی"
                                style={styles.radioButton}
                            />
                            <RadioButton
                                value={PERSONAL_WEB_TYPE}
                                label="وب سایت شخصی"
                                style={styles.radioButton}
                            />
                            <RadioButton
                                value={COMPANY_WEB_TYPE}
                                label="وب سایت استاتیک شرکتی"
                                style={styles.radioButton}
                            />
                            <RadioButton
                                value={SHOP_SITE_TYPE}
                                label="وب سایت فروشگاهی"
                                style={styles.radioButton}
                            />
                            <RadioButton
                                value={SERVICE_SITE_TYPE}
                                label="وب سایت سرویس رسانی"
                                style={styles.radioButton}
                            />
                            <RadioButton
                                value={APPLICATION_TYPE}
                                label="نرم افزار مدیریتی، مالی، بانکی، انبارداری و ..."
                                style={styles.radioButton}
                            />
                            <RadioButton
                                value={OTHER_TYPE}
                                label="سایر موارد"
                                style={styles.radioButton}
                            />
                        </RadioButtonGroup>
                    </div>
                </div>
            </div>
        </div>
    }
}
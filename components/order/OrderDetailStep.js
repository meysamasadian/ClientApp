import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {STUDENT_TYPE,PERSONAL_WEB_TYPE,COMPANY_WEB_TYPE, SHOP_SITE_TYPE, SERVICE_SITE_TYPE, APPLICATION_TYPE, OTHER_TYPE} from './order_type'
import StudentOrderType from "./details/StudentOrderType";
import PersonalWebOrderType from "./details/PersonalWebOrderType";
import CompanyWebOrderType from "./details/CompanyWebOrderType";
import ShopOrderType from "./details/ShopOrderType";
import ServiceOrderType from "./details/ServiceOrderType";
import ApplicationOrderType from "./details/ApplicationOrderType";
import OtherOrderType from "./details/OtherOrderType";

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};

export default class OrderDetailStep extends Component {
    static propTypes = {
        orderType:PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        let component;
        let orderType = this.props.orderType !== 'undefined' && this.props.orderType !== '' ? this.props.orderType:STUDENT_TYPE;
        switch (orderType) {
            case STUDENT_TYPE:
                component = <StudentOrderType/>
                break;
            case PERSONAL_WEB_TYPE:
                component = <PersonalWebOrderType/>
                break;
            case COMPANY_WEB_TYPE:
                component = <CompanyWebOrderType/>
                break;
            case SHOP_SITE_TYPE:
                component = <ShopOrderType/>
                break;
            case SERVICE_SITE_TYPE:
                component = <ServiceOrderType/>
                break;
            case APPLICATION_TYPE:
                component = <ApplicationOrderType/>
                break;
            case OTHER_TYPE:
                component = <OtherOrderType/>
                break;
        }
        return <div className="form-inline">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 align-items-start">
                        {component}
                    </div>
                </div>
            </div>
        </div>
    }
}
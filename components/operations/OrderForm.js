import React,{Component} from 'react';
import PropTypes from 'prop-types';
import OrderRegisterStepper from "../order/OrderRegisterStepper";
import OrderType from "../dashboard/OrderType";

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};


export class OrderForm extends Component {
    static propTypes = {
        actions:PropTypes.func,
        updateIndex:PropTypes.func
    }

    constructor(props){
        super(props);
        this.addActions = this.addActions.bind(this);
        this.updateIndex = this.updateIndex.bind(this);
    }


    addActions(actions) {
        this.props.actions(actions);
    }

    updateIndex(step,end) {
        this.props.updateIndex(step,end);
    }

    render() {
        return <div className="container-fluid" style={{direction:'rtl'}}>
            <div className="row">
                <div className="col" style={{textAlign:'right'}}>
                    <h4>ثبت سفارش جدید</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-4 align-self-center">
                                <OrderType type="student"/>
                            </div>
                            <div className="col-md-4 align-self-center">
                                <OrderType type="personal"/>
                            </div>
                            <div className="col-md-4 align-self-center">
                                <OrderType type="company"/>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-4 align-self-center">
                                <OrderType type="shop"/>
                            </div>
                            <div className="col-md-4 align-self-center">
                                <OrderType type="service"/>
                            </div>
                            <div className="col-md-4 align-self-center">
                                <OrderType type="software"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
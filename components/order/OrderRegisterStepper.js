import React from 'react';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import {StepContent} from "material-ui";
import OrderTypeStep from "./OrderTypeStep";
import OrderDetailStep from "./OrderDetailStep";
import OrderBriefStep from "./OrderBriefStep";

export default class OrderRegisterStepper extends React.Component {
    static propTypes = {
        actions: PropTypes.func,
        current: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            finished: false,
            stepIndex: 0,
            orderType: ""
        };
        this.addActions = this.addActions.bind(this);
        this.renderStepActions = this.renderStepActions.bind(this);
        this.handleOrderType = this.handleOrderType.bind(this);
        this.getStepForm = this.getStepForm.bind(this);
    }


    addActions(actions) {
        this.props.actions(
            actions
        );
    }

    handleOrderType(type) {
        this.setState(Object.assign(this.state, {orderType: type}))
    }

    handleNext = () => {
        const {stepIndex} = this.state;
        if (stepIndex + 1 > 2) {
            return;
        }
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex > 2,
        });
        this.props.current(this.state.stepIndex, 2);
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return 'نوع سفارش خود را تعیین نمایید.';
            case 1:
                return '';
            case 2:
                return 'سفارش خود را تایید نمایید';
        }
    }

    getStepForm(stepIndex) {
        let orderType = this.state.orderType;
        console.log("this.state.orderType", this.state.orderType);
        switch (stepIndex) {
            case 0:
                return <OrderTypeStep changeType={this.handleOrderType}/>;
            case 1:
                return <OrderDetailStep orderType={orderType}/>;
            case 2:
                return <OrderBriefStep/>;
        }
    }

    renderStepActions(step) {
        const {stepIndex} = this.state;
        return (
            <div style={{margin: '12px 0'}}>
                <RaisedButton
                    label={stepIndex === 3 ? 'تایید نهایی' : 'مرحله بعدی'}
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onClick={this.handleNext}
                    style={{marginRight: 12}}
                />
                {step > 0 && (
                    <FlatButton
                        label="بازگشت"
                        disabled={stepIndex === 0}
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onClick={this.handlePrev}
                    />
                )}
            </div>
        );
    }

    componentDidMount() {
        let stepIndex = this.state.stepIndex;
        let next = <RaisedButton
            label={stepIndex === 3 ? 'ثبت نهایی' : 'مرحله بعد'}
            primary={true}
            onClick={this.handleNext}
        />;
        let back = <FlatButton
            label="بازگشت"
            disabled={stepIndex === 0}
            secondary={true}
            onClick={this.handlePrev}
        />;
        this.addActions([back, next]);
    }

    render() {
        console.log("render", this.state.orderType);
        const {finished, stepIndex} = this.state;
        const contentStyle = {margin: '0 16px'};
        return (
            <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
                <Stepper activeStep={stepIndex}>
                    <Step>
                        <StepLabel>نوع سفارش</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>جزییات سفارش</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>خلاصه سفارش</StepLabel>
                    </Step>
                </Stepper>
                <div style={contentStyle}>
                    <div>
                        <p className="">{this.getStepContent(stepIndex)}</p>
                        <div style={{minHeight: '100px'}}>
                            {this.getStepForm(stepIndex)}
                        </div>
                        <div style={{marginTop: 15, float: 'left'}}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


OrderRegisterStepper.contextTypes = {
    screenType: PropTypes.string,
    width: PropTypes.number
};

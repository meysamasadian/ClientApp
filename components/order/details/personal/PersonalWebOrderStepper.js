import React from 'react';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import PersonalWebDescription from "./PersonalWebDescription";
import PersonalWebTemplate from "./PersonalWebTemplate";
import {StepContent} from "material-ui";

export default class PersonalWebOrderStepper extends React.Component {
    static propTypes = {
        actions:PropTypes.func,
        current:PropTypes.func,
    }
    constructor(props) {
        super(props);
        this.state = {
            finished: false,
            stepIndex: 0,
            orderType:""
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
        this.setState(Object.assign(this.state,{orderType:type}))
    }

    handleNext = () => {
        const {stepIndex} = this.state;
        if (stepIndex+1 > 2) {
            return;
        }
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex > 2,
        });
        this.props.current(this.state.stepIndex,2);
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
                return 'توضیح مختصر درباره عملکرد وب سایت';
            case 1:
                return 'انتخاب قالب وب سایت';
        }
    }

    getStepForm(stepIndex) {
        let orderType  = this.state.orderType;
        console.log("this.state.orderType",this.state.orderType);
        switch (stepIndex) {
            case 0:
                return <PersonalWebDescription />;
            case 1:
                return <PersonalWebTemplate />;
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
        this.addActions([back,next]);
    }

    render() {
        const {finished, stepIndex} = this.state;
        const contentStyle = {margin: '0 16px'};
        return (
            <div style={{width: '100%', maxWidth: 700, marginRight: '-35px'}}>
                <Stepper activeStep={stepIndex} orientation="vertical">
                    <Step>
                        <StepLabel>توصیف کلی</StepLabel>
                        <StepContent>
                            {this.getStepContent(0)}
                            {this.getStepForm(0)}
                            {this.renderStepActions(0)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>انتخاب قالب</StepLabel>
                        <StepContent>
                            {this.getStepContent(1)}
                            {this.getStepForm(1)}
                            {this.renderStepActions(1)}
                        </StepContent>
                    </Step>
                </Stepper>
            </div>
        );
    }
}


PersonalWebOrderStepper.contextTypes = {
    screenType: PropTypes.string,
    width:PropTypes.number
};

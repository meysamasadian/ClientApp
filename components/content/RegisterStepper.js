import React from 'react';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import BasicStep from "./BasicStep";
import VerificationStep from "./VerificationStep";
import PasswordStep from "./PasswordStep";
import PropTypes from 'prop-types';
import {StepContent} from "material-ui";
import UserTypeStep from "./UserTypeStep";

export default class RegisterStepper extends React.Component {

    state = {
        finished: false,
        stepIndex: 0,
    };

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 3,
        });
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
                return 'اطلاعات خود را وارد کنید';
            case 1:
                return 'لطفا کد ارسالی  را اینجا وارد کنید';
            case 2:
                return 'رمز عبور خود را وارد کنید';
            case 3:
                return 'نوع کاربری خود را مشخص نمایید';
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }

    getStepForm(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <BasicStep />;
            case 1:
                return <VerificationStep/>;
            case 2:
                return <PasswordStep/>;
            case 3:
                return <UserTypeStep/>;
            default:
                return 'You\'re a long way from home sonny jim!';
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

    render() {
        const {finished, stepIndex} = this.state;
        const contentStyle = {margin: '0 16px'};
        if (this.context.screenType === "xs") {
            return (
                <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
                    <Stepper activeStep={stepIndex} orientation="vertical">
                        <Step>
                            <StepLabel>اطلاعات اولیه</StepLabel>
                            <StepContent>
                                {this.getStepContent(0)}
                                {this.getStepForm(0)}
                                {this.renderStepActions(0)}
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>تاییدیه موبایل</StepLabel>
                            <StepContent>
                                {this.getStepContent(1)}
                                {this.getStepForm(1)}
                                {this.renderStepActions(1)}
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>رمز عبور</StepLabel>
                            <StepContent>
                                {this.getStepContent(2)}
                                {this.getStepForm(2)}
                                {this.renderStepActions(2)}
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>نوع کاربری</StepLabel>
                            <StepContent>
                                {this.getStepContent(3)}
                                {this.getStepForm(3)}
                                {this.renderStepActions(3)}
                            </StepContent>
                        </Step>
                    </Stepper>
                    {finished && (
                        <p style={{margin: '20px 0', textAlign: 'center'}}>
                            <a
                                href="#"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.setState({stepIndex: 0, finished: false});
                                }}
                            >
                                Click here
                            </a> to reset the example.
                        </p>
                    )}
                </div>
            );
        } else {
            return (
                <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
                    <Stepper activeStep={stepIndex}>
                        <Step>
                            <StepLabel>ثبت اطلاعات</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>تاییدیه شماره موبایل</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>تعیین رمز عبور</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>تعیین نوع کاربری</StepLabel>
                        </Step>
                    </Stepper>
                    <div style={contentStyle}>
                        {finished ? (
                            <p>
                                <a
                                    href="#"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        this.setState({stepIndex: 0, finished: false});
                                    }}
                                >
                                    Click here
                                </a> to reset the example.
                            </p>
                        ) : (
                            <div>
                                <p className="">{this.getStepContent(stepIndex)}</p>
                                <div style={{minHeight: '100px'}}>
                                    {this.getStepForm(stepIndex)}
                                </div>
                                <div style={{marginTop: 15, float: 'left'}}>
                                    <RaisedButton
                                        label={stepIndex === 3 ? 'ثبت نهایی' : 'مرحله بعد'}
                                        primary={true}
                                        onClick={this.handleNext}
                                    />
                                    <FlatButton
                                        label="بازگشت"
                                        disabled={stepIndex === 0}
                                        onClick={this.handlePrev}
                                        style={{marginRight: 12}}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );
        }
    }
}


RegisterStepper.contextTypes = {
    screenType: PropTypes.string,
    width:PropTypes.number
};

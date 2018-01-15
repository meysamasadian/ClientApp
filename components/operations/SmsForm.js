import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {RadioButton, RadioButtonGroup, TextField, Toggle} from "material-ui";

const styles = {
    block: {
        maxWidth: 250,
    },
    toggle: {
        marginBottom: 16,
    },
    thumbOff: {
        backgroundColor: '#ffcccc',
    },
    trackOff: {
        backgroundColor: '#ff9d9d',
    },
    thumbSwitched: {
        backgroundColor: 'red',
    },
    trackSwitched: {
        backgroundColor: '#ff9d9d',
    },
    labelStyle: {
        color: 'red',
    },
};


export class SmsForm extends Component {
    static propTypes = {
        actions:PropTypes.func
    }

    constructor(props){
        super(props);
        this.addActions = this.addActions.bind(this);
    }

    addActions() {
        this.props.actions(
            [
                <FlatButton
                    label="تایید"
                    primary={true}
                    keyboardFocused={true}
                    onClick={()=>{}}
                />
            ]
        );
    }

    render() {
        return <div className="container-fluid" style={{direction:'rtl'}}>
            <div className="row">
                <div className="col" style={{textAlign:'right'}}>
                    <h4>تنظیمات ارسال پیامک</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <TextField
                        disabled={true}
                        hintText="Disabled Hint Text"
                        defaultValue="09363792107"
                        floatingLabelText="شماره ی پیامکی شما"
                    />
                </div>
                <div className="col-12" style={{marginTop:'5px'}}>
                    <Toggle
                        label="ارسال پیامک اطلاع رسانی سفارش"
                        labelPosition="right"
                        style={styles.toggle}
                    />
                </div>
                <div className="col-12">
                    <Toggle
                        label="ارسال پیامکهای خبری و offerهای ویژه"
                        labelPosition="right"
                        style={styles.toggle}
                    />
                </div>
            </div>
        </div>
    }
}
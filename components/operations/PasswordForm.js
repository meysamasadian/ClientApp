import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {FlatButton, RadioButton, RadioButtonGroup, TextField} from "material-ui";

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};


export class PasswordForm extends Component {
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
                    <h4>مدیریت رمز عبور</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <TextField
                        floatingLabelText="رمز عبور فعلی"
                    />
                </div>
                <div className="col-12">
                    <TextField
                        floatingLabelText="رمز عبور جدید"
                    />
                </div>
                <div className="col-12">
                    <TextField
                        floatingLabelText="تکرار رمز عبور"
                    />
                </div>
            </div>
        </div>
    }
}
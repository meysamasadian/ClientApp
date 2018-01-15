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


export class PersonForm extends Component {
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

    componentWillMount() {
        this.addActions();
    }

    render() {
        return <div className="container-fluid" style={{direction:'rtl'}}>
            <div className="row">
                <div className="col" style={{textAlign:'right'}}>
                    <h4>اطلاعات مشتری</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <TextField
                        defaultValue="Default Value"
                        floatingLabelText="نام"
                    />
                </div>
                <div className="col-md-6 col-sm-12">
                    <TextField
                        defaultValue="Default Value"
                        floatingLabelText="نام خانوادگی"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <TextField
                        defaultValue="Default Value"
                        floatingLabelText="ایمیل"
                    />
                </div>
                <div className="col-md-6 col-sm-12">
                    <TextField
                        defaultValue="Default Value"
                        floatingLabelText="موبایل"
                    />
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <span>نوع کاربری</span>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col">
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
    }
}
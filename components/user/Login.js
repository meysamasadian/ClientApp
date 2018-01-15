import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';

const style = {
    paper: {
        minHeight: 500,
        maxHeight: 500,
        minWidth: 220,
        maxWidth: 400,
        margin: '40px auto',
        textAlign: 'center',
    },
    grid: {
        width: '100%'
    },
    header: {
        float: 'right',
        width: '100%',
        maxHeight: '62px',
        marginTop: '15px',
        textAlign: 'center'
    },
    input_tile: {
        float: 'right',
        width: '100%',
        maxHeight: '32px',
        padding: '20 0'
    },
    btn_tile: {
        float: 'right',
        width: '100%',
        maxHeight: '52px',
        padding: '30 0'
    },
    text_tile: {
        float: 'right',
        textAlign: 'center',
        width: '100%',
        maxHeight: '32px',
        padding: '0'
    },
    text_in_tile: {
        margin: '5 auto',
        maxWidth:'200px',
    },
    btn: {
        margin: 5
    },
    checkbox: {
/*        margin: 36,*/
    },
    label: {
        maxHeight: '-20px'
    }
};

const Login = () => (
    <Paper rounded={true} style={style.paper} zDepth={2} >
        <div style={style.grid}>
            <div style={style.header}>
                <img src="../../asserts/images/logo/logo_logo.png" />
            </div>
            <div style={style.input_tile}>
                <TextField
                    hintText="ایمیل یا شماره موبایل"
                    floatingLabelText="نام کاربری"
                />
            </div>
            <div style={style.input_tile}>
                <TextField
                    hintText="رمز عبور"
                    floatingLabelText="رمز عبور"
                    type="password"
                />
            </div>
            <div style={style.btn_tile}>
                <RaisedButton label="ورود" primary={true} style={style.btn} />
                <RaisedButton label="پاک کن" secondary={true} style={style.btn} />
            </div>
            <div style={style.text_tile}>
                <div style={style.text_in_tile}>
                    <Checkbox
                        label="من را به خاطر بسپار"
                        style={style.checkbox}
                        labelStyle={style.label}
                    />
                </div>
            </div>
            <div style={style.text_tile}>
                <div style={style.text_in_tile}>
                    <FlatButton label="رمز خود را فراموش کرده ام" />
                </div>
            </div>
            <div style={style.text_tile}>
                <div style={style.text_in_tile}>
                    <FlatButton label="ثبت نام به عنوان کاربر جدید" />
                </div>
            </div>
        </div>
    </Paper>
);


export default Login;
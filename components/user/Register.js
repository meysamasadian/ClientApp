import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import FontIcon from 'material-ui/FontIcon';
import Female from '../share/icons/Female';
import Captcha from '../share/captcha/Captcha';

const style = {
    paper: {
        minHeight: 600,
        maxHeight: 600,
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
export default class Register extends React.Component {
    state = {
        value: null,
    };

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return <Paper rounded={true} style={style.paper} zDepth={2} >
            <div style={style.grid}>
                <div style={style.header}>
                    <h3>اطلاعات خود را وارد نمایید:</h3>
                </div>
                <div style={style.input_tile}>
                    <TextField
                        hintText="برای مثال علی"
                        floatingLabelText="نام"
                    />
                </div>
                <div style={style.input_tile}>
                    <TextField
                        hintText="برای مثال احمدی"
                        floatingLabelText="نام خانوادگی"
                    />
                </div>
                <div style={style.input_tile}>
                    <TextField
                        hintText="xxx@yyy.zzz"
                        floatingLabelText="ایمیل"
                    />
                </div>
                <div style={style.input_tile}>
                    <TextField
                        hintText="09XX XXX XXXX"
                        floatingLabelText="موبایل"
                    />
                </div>
                <div style={style.input_tile}>
                    <SelectField
                        value={this.state.value}
                        onChange={this.handleChange}
                        floatingLabelText="جنسیت"
                        floatingLabelFixed={false}
                        hintText="مرد یا زن"
                        floatingLabelStyle={{marginLeft:'-130px'}}
                        labelStyle={{paddingRight:'225px'}}
                    >
                        <MenuItem value={null} primaryText="" />
                        <MenuItem value={false} primaryText="مرد" leftIcon={<FontIcon className="fa fa-home" />} />
                        <MenuItem value={true} primaryText="زن" leftIcon={<Female />} />
                    </SelectField>
                </div>
                <div style={style.input_tile}>
                    <Captcha />
                </div>
                <div style={style.btn_tile}>
                    <RaisedButton label="ثبت نام" primary={true} style={style.btn} />
                    <RaisedButton label="پاک کن" secondary={true} style={style.btn} />
                </div>
            </div>
        </Paper>
    }
}

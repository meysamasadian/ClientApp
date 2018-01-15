import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AddPerson from 'material-ui/svg-icons/social/person-add';
import LockIcon from 'material-ui/svg-icons/action/lock-open';


export default class LoginBar extends Component {

    render() {
        return <div class="form-inline col-md-3 col-sm-12">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="container">
                            <div className="row">
                                <TextField
                                    className="col-md-12"
                                    hintText="ایمیل یا شماره موبایل"
                                    floatingLabelText="نام کاربری"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                            <div className="row">
                                <TextField
                                    className="col-md-12"
                                    hintText="رمز عبور"
                                    floatingLabelText="رمز عبور"
                                    type="password"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="container">
                            <div className="row align-items-end">
                                <RaisedButton
                                    style={{marginTop:5}}
                                    label="ورود" primary={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-4"></div>
                <div class="form-inline col-md-8">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col">
                                <FlatButton
                                    label="ثبت نام"
                                    labelPosition="after"
                                    primary={true}
                                    icon={<AddPerson />}
                                />
                            </div>
                            <div className="col">
                                <FlatButton
                                    label="فراموشی رمز"
                                    labelPosition="after"
                                    primary={true}
                                    icon={<LockIcon />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
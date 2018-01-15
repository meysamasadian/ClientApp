import React, {Component} from 'react';
import PropTypes from 'prop-types';


const styles = {
    root: {
        width: '100%',
        minHeight: '100px',
        backgroundColor: '#fff',
        borderBottom: "3px solid #DD501C",
        marginTop: '20px'
    },
    content: {
        width: '100%',
        height: '130'
    }
};
export default class Shortcut extends Component {
    static propTypes = {
        type: PropTypes.string
    }

    constructor(props) {
        super(props);
    }

    render() {
        let icon = "";
        let title = "";
        let subtitle = "";
        let action = "";
        let color = "";
        let screen = this.context.screenType;
        let size = this.context.width;
        switch (this.props.type) {
            case "define":
                icon = "../../asserts/images/shortcuts/define.png";
                title = "سفارش جدید";
                subtitle = "یه پروژه جدید تعریف کن!";
                color = "#009F8E";
                action = () => {
                };
                break;
            case "track":
                icon = "../../asserts/images/shortcuts/track.png";
                title = "پیگیری وضعیت";
                subtitle = "از وضعیت سفارشت مطلع شو!";
                action = () => {
                };
                color = "#D1A944";
                break;
            case "account":
                icon = "../../asserts/images/shortcuts/account.png";
                title = "حساب کاربری";
                subtitle = "اطلاعات کاربریت رو چک کن!";
                action = () => {
                };
                color = "#EDE7A9";
                break;
            case "delivery":
                icon = "../../asserts/images/shortcuts/delivery.png";
                title = "نحوه تحویل";
                subtitle = "نحوه تحویل رو بررسی کن!";
                action = () => {
                };
                color = "#A46D5B";
                break;
            case "transaction":
                icon = "../../asserts/images/shortcuts/payments.png";
                title = "پرداختها";
                subtitle = "آخرین پرداختها رو اینجا ببین!";
                action = () => {
                };
                color = "#F58072";
                break;
            case "support":
                icon = "../../asserts/images/shortcuts/support.png";
                title = "پشتیبانی";
                subtitle = "آماده برای پشتیبانی ۲۴ ساعته!";
                action = () => {
                };
                color = "#B6DDC9";
                break;

            case "student":
                icon = "../../asserts/images/shortcuts/student.png";
                title = "پروژه دانشجویی";
                action = () => {
                };
                color = "#B6DDC9";
                break;

            case "personal":
                icon = "../../asserts/images/shortcuts/personal.png";
                title = "سایت شخصی";
                action = () => {
                };
                color = "#F58072";
                break;
            case "company":
                icon = "../../asserts/images/shortcuts/company.png";
                title = "سایت شرکتی";
                action = () => {
                };
                color = "#A46D5B";
                break;
            case "shop":
                icon = "../../asserts/images/shortcuts/shop.png";
                title = "فروشگاه اینترنتی";
                action = () => {
                };
                color = "#EDE7A9";
                break;
            case "service":
                icon = "../../asserts/images/shortcuts/service.png";
                title = "سرویس دهنده";
                action = () => {
                };
                color = "#D1A944";
                break;
            case "software":
                icon = "../../asserts/images/shortcuts/software.png";
                title = "سایر نرم افزارها";
                action = () => {
                };
                color = "#009F8E";
                break;
        }
        Object.assign(styles.root, {backgroundColor: color});
        if (screen === 'xl') {
            if (this.context.width >= 1200 && this.context.width <= 1554) {
                return <div style={styles.root}>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-9">
                                <div className="container-fluid" style={{marginTop: '15px'}}>
                                    <div className="row">
                                        <div className="col">
                                    <span style={{fontFamily: 'IRANSansWeb', fontSize: '18px'}}>
                                        {title}
                                    </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                    <span style={{fontFamily: 'IRANSansWeb', fontSize: '8px'}}>
                                        {subtitle != null ? subtitle : ""}
                                    </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <img src={icon} style={{marginTop: '5px', width: "64px", height: "64px", float: 'left'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            } else {
                return <div style={styles.root}>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <div className="container-fluid" style={{marginTop: '15px'}}>
                                    <div className="row">
                                        <div className="col">
                                    <span style={{fontFamily: 'IRANSansWeb', fontSize: '22px'}}>
                                        {title}
                                    </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                    <span style={{fontFamily: 'IRANSansWeb', fontSize: '12px'}}>
                                        {subtitle}
                                    </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <img src={icon} style={{marginTop: '5px', float: 'left'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            }
        } else if (screen === 'lg') {
            return <div style={styles.root}>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="container-fluid" style={{marginTop: '15px'}}>
                                <div className="row">
                                    <div className="col">
                                    <span style={{fontFamily: 'IRANSansWeb', fontSize: '16px'}}>
                                        {title}
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={icon} style={{marginTop: '5px', width: "64px", height: "64px", float: 'left'}}/>
                        </div>
                    </div>
                </div>
            </div>
        } else {
            if (screen === 'xs') {
                if  (size < 266) {
                    return <div style={styles.root}>
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-md-10 col-sm-6">
                                    <div className="container-fluid" style={{marginTop: '15px'}}>
                                        <div className="row">
                                            <div className="col">
                                            <span style={{fontFamily: 'IRANSansWeb', fontSize:"22px"}}>
                                                {title}
                                            </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <img src={icon} style={{float: 'left', marginTop:15}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                } else {
                    return <div style={styles.root}>
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-md-10 col-sm-6">
                                    <div className="container-fluid" style={{marginTop: '15px'}}>
                                        <div className="row">
                                            <div className="col">
                                                <center>
                                                    <span style={{fontFamily: 'IRANSansWeb', fontSize: "22px"}}>
                                                        {title}
                                                    </span>
                                                </center>
                                            </div>
                                            <div className="col">
                                                <center>
                                                   <img src={icon} />
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            } else {
                return <div style={styles.root}>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-10 col-sm-6">
                                <div className="container-fluid" style={{marginTop: '15px'}}>
                                    <div className="row">
                                        <div className="col">
                                        <span style={{fontFamily: 'IRANSansWeb', fontSize: '22px'}}>
                                            {title}
                                        </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                        <span style={{fontFamily: 'IRANSansWeb', fontSize: '12px'}}>
                                            {subtitle}
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-6">
                                <img src={icon} style={{marginTop: '5px', float: 'left'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            }
        }
    }
}

Shortcut.contextTypes = {
    screenType: PropTypes.string,
    width: PropTypes.number
};

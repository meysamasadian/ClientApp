import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {AppBar} from "material-ui";
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import UserInfo from "./UserInfo";
import MenuItemContainer from "../../container/MenuItemContainer";
import {PersonForm} from "../operations/PersonForm";
import {PasswordForm} from "../operations/PasswordForm";
import {SmsForm} from "../operations/SmsForm";
import ArrowDropRight from 'material-ui/svg-icons/navigation/subdirectory-arrow-left';
import {OrderForm} from "../operations/OrderForm";

const menus = {
    user : {
        info : {
            title:"اطلاعات شخصی",
            component:<PersonForm/>,
            icon:"fa fa-user"
        },
        password : {
            title:"تغییر پسورد",
            component:<PasswordForm/>,
            icon:"fa fa-key"
        },
        sms : {
            title:"تنظیمات پیامک",
            component:<SmsForm/>,
            icon:"fa fa-mobile"
        },
        block : {
            title:"حذف حساب",
            component:null,
            icon:"fa fa-ban"
        },
    },
    order : {
        define: {
            title:"سفارش جدید",
            icon:"fa fa-opencart",
            component:<OrderForm/>,
        },
        management: {
            title:"مدیریت سفارشات",
            component:null,
            icon:"fa fa-list"
        },
        delivery: {
            title:"تعیین نحوه تحویل",
            component:null,
            icon:"fa fa-truck"
        },
        status: {
            title:"پیگیری سفارش",
            component:null,
            icon:"fa fa-eye"
        }
    },
    payment: {
        pay: {
            title:"پرداخت",
            component:null,
            icon:"fa fa-money"
        },
        management: {
            title:"مدیریت پرداخت",
            component:null,
            icon:"fa fa-list"
        }
    },
    other: {
        sample: {
            title:"نمونه کارها",
            component:null,
            icon:"fa fa-link"
        },
        support : {
            title:"پشتیبانی",
            component:null,
            icon:"fa fa-comments"
        },
        help: {
            title:"راهنما",
            component:null,
            icon:"fa fa-question"
        }
    }
};


/*
menuItems: {
    student: {
        title:"پروژه دانشجویی",
            component:null,
            icon:"fa fa-list"
    },
    personal: {
        title:"وب سایت شخصی",
            component:null,
            icon:"fa fa-list"
    },
    company: {
        title:"وب سایت شرکتی",
            component:null,
            icon:"fa fa-list"
    },
    shop: {
        title:"فروشگاه اینترنتی",
            component:null,
            icon:"fa fa-list"
    },
    service: {
        title:"سرویس دهنده",
            component:null,
            icon:"fa fa-list"
    },
    app: {
        title:"نرم افزار",
            component:null,
            icon:"fa fa-list"
    },
    other: {
        title:"سایر موارد",
            component:null,
            icon:"fa fa-list"
    },
}
*/

export class DMenuItem extends Component{
    static propTypes = {
        title:PropTypes.string,
        icon:PropTypes.string,
        onClick:PropTypes.func,
        menuItems:PropTypes.array
    }
    constructor(props) {
        super(props);
    }
    render () {
        const {
            icon,
            title,
            onClick,
            menuItems
        } = this.props;
        if (onClick) {
            return <MenuItem
                primaryText={title}
                leftIcon={<FontIcon className={icon}/>}
                onClick={onClick}
            />
        } else {
            let subMenus = menuItems.map((menu)=>{ return <MenuItem
                primaryText={menu.props.title}
                leftIcon={<FontIcon className={menu.props.icon}/>}
                onClick={menu.props.onClick}
            />});
            console.log("old",menuItems);
            console.log("sun",subMenus);
            return <MenuItem
                primaryText={title}
                leftIcon={<FontIcon className={icon}/>}
                rightIcon={<ArrowDropRight />}
                menuItems={subMenus}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
            />
        }
    }
}

const menuItems = generateMenu(menus);

function generateMenu(currentMenu) {
    let menuItems = [];
    let index = 0;
    for (let key in currentMenu) {
        index++;
        if (!currentMenu.hasOwnProperty(key)) continue;
        let cate = currentMenu[key];
        menuItems.push(generate(cate,index));
        if (index != 4) {
            menuItems.push(<Divider/>);
        }
    }
    return menuItems;
}

function generate(cate,index) {
    let idx = 0;
    let menuItems = [];
    for (let cateKey in cate) {
        idx++;
        if (!cate.hasOwnProperty(cateKey)) continue;
        let item = cate[cateKey];
        if (item.hasOwnProperty('component')) {
            menuItems.push(<MenuItemContainer key={index + " " + idx} icon={item['icon']} title={item['title']}
                                              component={item['component']}/>)
        } else {
            menuItems.push(<MenuItemContainer key={index + " " + idx} icon={item['icon']} title={item['title']}
                                              menuItems={generate(item['menuItems'],0)}/>)
        }
    }
    return menuItems;
}

const style = {
    root: {
        minWidth: '180px',
        minHeight: '700px',
        marginTop: '10%'
    },
    paper: {
        display: 'inline-block',
        minWidth: '180px',
        margin: '0px -32px 16px 0',
    },
    rightIcon: {
        textAlign: 'center',
        lineHeight: '24px',
    },
    small: {
        position: 'fixed',
        zIndex:999999,
        top: 60,
        right: 0,
        width: '100%'
    }
}

class MainMenu extends Component {
    static porpTypes = {
        screenType : PropTypes.string
    }
    constructor(props) {
        super(props);
    }

    render() {
        console.log("menuItems: ",menuItems);
        return  <div>
            <Paper style={style.paper}>
                <Menu width={180}>
                    {menuItems}
                </Menu>
            </Paper>
        </div>
    }
}


const SmallLogged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><FontIcon className="fa fa-user" color="white"/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <div style={{width:'180px',height:'150px'}}>
            <UserInfo isSmall={true}/>
        </div>
    </IconMenu>
);

export const LargedLogged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><FontIcon className="fa fa-user" color="#010956"/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <div style={{width:'180px',height:'150px'}}>
            <UserInfo isSmall={true}/>
        </div>
    </IconMenu>
);

const Functions = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon color="white  "/></IconButton>
        }
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    >
        {menuItems}
    </IconMenu>
);


class SmallMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            valueSingle: '3',
            valueMultiple: ['3', '5'],
        };
        this.handleChangeMultiple = this.handleChangeMultiple.bind(this);
    }

    handleChangeMultiple = (event, value) => {
        this.setState({
            valueMultiple: value,
        });
    };

    render() {
        return (
            <AppBar
                style={{backgroundColor:'#c25201'}}
                title="صفحه نخست"
                iconElementRight ={<SmallLogged/>}
                iconElementLeft ={<Functions/>}
            />
        );
    }
}

export default class DMenu extends Component {
    static propTypse = {
        isSmall:PropTypes.bool
    }
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.isSmall) {
            console.log("menuItems: ",menuItems);
            return <div>
                <div>
                    <SmallMenu/>
                </div>
            </div>
        } else {
            return  <div className="col" style={style.root}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <MainMenu />
                        </div>
                    </div>
                </div>
            </div>
        }
    }
}

DMenu.contextTypes = {
    screenType: PropTypes.string,
    width: PropTypes.number
};

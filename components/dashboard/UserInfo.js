import React,{Component} from 'react';
import PropTypes from 'prop-types';


const styles = {
    root: {
        backgroundColor:'white'
    }
}

export default class UserInfo extends Component {
    static propTypes = {
        isSmall:PropTypes.bool
    }
    constructor(props){
        super(props);
    }

    render() {
        let width = this.context.width;
        let screenType = this.context.screenType;
        switch (screenType) {
            case 'xl':
            case 'lg':
                Object.assign(styles.root,{
                    minWidth:'336px',
                    minHeight:'150px',
                });
                break;
            case 'md':
            case 'sm':
            case 'xs':
                Object.assign(styles.root,{
                    position:'relative',
                    width : '100%',
                    minHeight:'150px',
                });
                break;
        }
        return <div className="col" style={styles.root}>
            <div className="register-container-inner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

UserInfo.contextTypes = {
    screenType: PropTypes.string,
    width:PropTypes.number
};

import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Ads from "./Ads";

const styles = {
    root: {
        float:'right',
        minWidth:'700px',
        minHeight:'700px',
        marginRight:"100px",
        marginTop:"20px"
    }
}

export default class DCenter extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let width = this.context.width;
        let screenType = this.context.screenType;
        switch (screenType) {
            case 'xl':
            case 'lg':
                Object.assign(styles.root, {
                    minWidth: '100%',
                });
                break;
            case 'md':
            case 'sm':
            case 'xs':
                Object.assign(styles.root, {
                    position: 'relative',
                    width: '100%',
                    right: 0,
                    top: 0
                });
                break;
        }
        return <div style={styles.root}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Ads />
                    </div>
                </div>
            </div>
        </div>
    }
}

DCenter.contextTypes = {
    screenType: PropTypes.string,
    width: PropTypes.number
};
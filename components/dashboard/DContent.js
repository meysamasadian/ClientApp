import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DSide from "./DSide";
import UserInfo from "./UserInfo";
import DMenu from "./DMenu";
import DCenter from "./DCenter";
import Shortcuts from "./Shortcuts";


const styles = {
    parent: {
        width: '100%',
        minHeight: '400px',
        background: 'url("../../asserts/images/slides/slide1.png") no-repeat fixed top',
    },
    parentSmall: {
        width: '100%',
        minHeight: '400px',
    },
    root: {}
}

export default class DContent extends Component {
    static propTypes = {
        isSmall: PropTypes.bool
    }
    constructor(props) {
        super(props);
    }

    render() {
        let width = this.context.width;
        if (this.props.isSmall) {
            Object.assign(styles.root, {
                position: 'relative',
                width: '100%',
                minHeight: '600px',
                right: 0,
                top: 0
            });
            Object.assign(styles.parent, {
                width: '100%',
                minHeight: '400px',
                background: 'none',
            });
            return <div style={styles.parent}>
                <div style={styles.root}>
                    <DMenu isSmall={true}/>
                    <Shortcuts/>
                </div>
            </div>
        } else {
            Object.assign(styles.root, {
                position: 'fixed',
                width: width * 8 / 10,
                right: width / 10,
                minHeight: '400px',
                top: '5%'
            });
            Object.assign(styles.parent, {
                width: '100%',
                minHeight: '400px',
                background: 'url("../../asserts/images/slides/slide1.png") no-repeat fixed top',
            });
            return <div style={styles.parent}>
                <div style={styles.root}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                                <DSide/>
                            </div>
                            <div className="col-md-8">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col">
                                            <DCenter/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    }
}

DContent.contextTypes = {
    screenType: PropTypes.string,
    width: PropTypes.number
};

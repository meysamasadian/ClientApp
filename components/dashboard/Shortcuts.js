import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Shortcut from "./Shortcut";


const styles = {
    root : {
        width : '100%',
    },
    content: {
        width:'100%',
        height:'130'
    }
};
export default class Shortcuts extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let width = this.context.width;
        let screenType = this.context.screenType;
        let isSmall = false;
        switch (screenType) {
            case 'xl':
            case 'lg':
                isSmall = false;
                break;
            case 'md':
            case 'sm':
            case 'xs':
                isSmall = true;
                break;
        }
        if (!isSmall) {
            return <div style={styles.root}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-8">
                            <div style={styles.content}>
                                <div className="container-fluid">
                                    <div className="row align-items-center">
                                        <div className="col-md-4 align-self-center">
                                            <Shortcut type="define"/>
                                        </div>
                                        <div className="col-md-4 align-self-center">
                                            <Shortcut type="track"/>
                                        </div>
                                        <div className="col-md-4 align-self-center">
                                            <Shortcut type="delivery"/>
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-md-4 align-self-center">
                                            <Shortcut type="transaction"/>
                                        </div>
                                        <div className="col-md-4 align-self-center">
                                            <Shortcut type="account"/>
                                        </div>
                                        <div className="col-md-4 align-self-center">
                                            <Shortcut type="support"/>
                                        </div>
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
                    <div className="row">
                        <div className="col-12">
                            <div style={styles.content}>
                                <div className="container-fluid">
                                    <div className="row align-items-center">
                                        <Shortcut type="define"/>
                                    </div>
                                    <div className="row align-items-center">
                                        <Shortcut type="track"/>
                                    </div>
                                    <div className="row align-items-center">
                                        <Shortcut type="transaction"/>
                                    </div>
                                    <div className="row align-items-center">
                                        <Shortcut type="delivery"/>
                                    </div>
                                    <div className="row align-items-center">
                                        <Shortcut type="account"/>
                                    </div>
                                    <div className="row align-items-center">
                                        <Shortcut type="support"/>
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

Shortcuts.contextTypes = {
    screenType: PropTypes.string,
    width:PropTypes.number
};

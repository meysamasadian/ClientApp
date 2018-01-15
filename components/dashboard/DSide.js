import React,{Component} from 'react';
import PropTypes from 'prop-types';
import UserInfo from "./UserInfo";
import DMenu from "./DMenu";


const styles = {
    root: {
        float:'right',
        maxWidth:'300px',
        minHeight:'700px',
        top:0,
        right: 10,
    }
}

export default class DSide extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return <div  style={styles.root}>
                <DMenu isSmall={false} />
        </div>
    }
}

DSide.contextTypes = {
    screenType: PropTypes.string,
    width:PropTypes.number
};

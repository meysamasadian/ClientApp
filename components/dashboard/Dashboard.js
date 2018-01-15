import React,{Component} from 'react';
import Dimensions from 'react-dimensions'
import PropTypes from 'prop-types';
import DHeader from "./DHeader";
import DContent from "./DContent";
import Shortcuts from "./Shortcuts";
import MyDialog from "./MyDialog";
import DialogContainer from "../../container/DialogContainer";

const styles = {
    root: {
        background: 'url("../../asserts/images/background/page-background.png")',
        height:'100%',
        overflowY:'scroll'
    }
}

class Dashboard extends Component {
    static propTypes = {
        popover:PropTypes.any
    }
    constructor(props) {
        super(props);
/*        this.state = {
            showPopover:popover.visible,
            popoverComponent:popover.component,
        }*/
    }

    getChildContext() {
        let size = this.props.containerWidth;
        if (size <= 575) {
            return {screenType: "xs", width: size};
        } else if (size >= 576 && size <= 767) {
            return {screenType: "sm", width: size};
        } else if (size >= 768 && size <= 991) {
            return {screenType: "md", width: size};
        } else if (size >= 992 && size <= 1199) {
            return {screenType: "lg", width: size};
        } else if (size >= 1200) {
            return {screenType: "xl", width: size};
        }
    }

    render() {
        console.log("dashboard props",this.props);
        let isSmall = (this.props.containerWidth < 991);

        if (isSmall) {
            return <div style={styles.root}>
                <DContent isSmall={true}/>
            </div>
        } else {
            return <div style={styles.root}>
                <DHeader/>
                <DContent isSmall={false}/>
                <Shortcuts/>
                <DialogContainer />
            </div>
        }
    }
}

Dashboard.childContextTypes = {
    screenType: PropTypes.string,
    width: PropTypes.number
};

export default Dimensions()(Dashboard);
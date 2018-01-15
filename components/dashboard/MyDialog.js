import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import PropTypes from 'prop-types';



const initActions = [
    <FlatButton
        label="بستن"
        primary={false}
        keyboardFocused={true}
    />,
];

export default class MyDialog extends React.Component {
    static propTypes = {
        popover:PropTypes.any
    }

    constructor(props) {
        super(props);
        this.state = {
            open:this.props.open,
            actions:[]
        }
        this.customizeActions = this.customizeActions.bind(this);
        this.updateIndex = this.updateIndex.bind(this);
    }



    customizeActions(actions){
        let acts = [React.cloneElement(initActions[0],{onClick:this.handleClose})];
        actions.forEach(action => acts.push(action))
        this.setState(Object.assign(this.state,{actions:acts}))
    }

    updateIndex(step,end) {
        step++;
        let acts = [React.cloneElement(initActions[0],{onClick:this.handleClose})];
        let next = this.state.actions.filter(action=>action.props.label === 'مرحله بعد' || action.props.label === 'تایید')[0];
        let back = this.state.actions.filter(action=>action.props.label === 'بازگشت')[0];
        next = step !== end ? React.cloneElement(next,{label:"مرحله بعد"})
            : React.cloneElement(next,{label:"تایید"});
        back = step === 0 ? React.cloneElement(back,{disabled:true}) :
            React.cloneElement(back,{disabled:false});
        acts.push(back);
        acts.push(next);
        this.setState(Object.assign(this.state,{actions:acts}))
    }

    handleClose = () => {
        this.props.dialogOnClick();
    };


    render() {
        const {
            visible,
            component
        } = this.props.popover;
        let comp = component;
        if (component !== 'undefined' && component !== null) {
            comp = React.cloneElement(component, {actions: this.customizeActions, updateIndex: this.updateIndex});
        }
        return (
            <div>
                <Dialog
                    title=""
                    actions={this.state.actions}
                    modal={false}
                    open={visible}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    {comp}
                </Dialog>
            </div>
        );
    }
}
import React, {Component} from 'react';
import {RadioButton, RadioButtonGroup, TextField} from "material-ui";
import TextEditor from "../../../share/TextEditor";
import MyChips from "../../../share/MyChips";

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};

export default class PersonalWebDescription extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="form-inline">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <TextField
                            floatingLabelText="عنوان وب سایت"
                        />
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col">
                        <MyChips candidates={[ {key: 0, text: 'Angular'},
                            {key: 1, text: 'JQuery'},
                            {key: 2, text: 'Polymer'},
                            {key: 3, text: 'ReactJS'},]} label="انتخاب تکنولوژيها" hint="مثلا Java"/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <span style={{fontSize:'12px'}}>توصیف وب سایت</span>
                </div>
                <div className="row" style={{minHeight:"300px"}}>
                    <TextEditor/>
                </div>
            </div>
        </div>
    }
}
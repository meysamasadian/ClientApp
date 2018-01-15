import React, {Component} from 'react';
import WebTemplate from "../../../share/WebTemplate";

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
                    <span style={{fontSize:'12px'}}>انتخاب قالب</span>
                </div>
                <div className="row" style={{minHeight:"300px"}}>
                    <div className="col">
                        <WebTemplate title="تست" image="asserts/images/slides/slide1.png" link=""/>
                    </div>
                </div>
            </div>
        </div>
    }
}
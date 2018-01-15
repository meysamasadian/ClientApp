import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

const style = {
    input_tile: {
        margin: 'auto',
        width: '70%',
        padding: '20px',
    },
    part:{
      float:"left",
      marginRight: 20
    },
    input: {
        marginTop:'-15px',
        marginRight:'40px',
        width:40
    }
};

const numbers = {
    zero : {
        num: 0,
        chars:"صفر"
    },
    one : {
        num: 1,
        chars:"یک"
    },
    two : {
        num: 2,
        chars:"دو"
    },
    three : {
        num: 3,
        chars:"سه"
    },
    four : {
        num: 4,
        chars:"چهار"
    },
    five : {
        num: 5,
        chars:"پنج"
    },
    six : {
        num: 6,
        chars:"شش"
    },
    seven : {
        num: 7,
        chars:"هفت"
    },
    eight : {
        num: 8,
        chars:"هشت"
    },
    nine : {
        num: 9,
        chars:"نه"
    }
};

const operators = {
    sum: {
        id:1,
        el:"+",
        operation: (a,b)=>{return a+b}
    },
    subtract: {
        id:2,
        el:"-",
        operation: (a,b)=>{return a-b}
    },
    multiple: {
        id:3,
        el:"×",
        operation: (a,b)=>{return a*b}
    }
}

export default class Captcha extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            operator:"×",
            partBeta:"4",
            result:"هشت",
            partAlpha:"",
            input:"",
            errorText:""
        }
    }

    componentWillMount() {
        let candideA = Math.floor(Math.random() * 9) + 1;
        let candideB = Math.floor(Math.random() * 9) + 1;
        let operatorCandide = Math.floor(Math.random() * 3) + 1;
        let operator = null;
        for (let key in operators) {
            if (operators[key].id === operatorCandide) {
                operator = operators[key];
                break;
            }
        }

        let partBeta = null;
        for (let key in numbers) {
            if (numbers[key].num === candideB) {
                partBeta = numbers[key];
                break;
            }
        }
        let result =  operator.operation(candideA,candideB);
        this.setState(Object.assign(this.state, {result:result, operator:operator.el, partBeta:partBeta.chars, input:"", partAlpha:candideA}));
    }

    handleChange = (event) => {
        let val = event.target.value;
        if (val === this.state.partAlpha) {
            //todo callback
            this.setState(
                Object.assign(this.state, {errorText:""})
            );
        } else {
            this.setState(
                Object.assign(this.state, {input:"", errorText:"مقدار نادرست"})
            );
        }
    };

    render() {
        const {
            operator,
            partBeta,
            result,
            errorText,
        } = this.state;
        return <div style={style.input_tile}>
            <div style={style.part}>
                <TextField
                onchange={this.handleChange}
                hintText="عدد"
                errorText={errorText}
                style={style.input}
            /></div>
            <div style={style.part}>
                <span>{operator}</span>
            </div>
            <div style={style.part}>
                <span>{partBeta}</span>
            </div>
            <div style={style.part}>
                <span>=</span>
            </div>
            <div style={style.part}>
                <span>{result}</span>
            </div>
        </div>;
    }
}
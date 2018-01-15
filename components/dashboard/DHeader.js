import React,{Component} from 'react';
import LogoContainer from "../master/LogoContainer";
import {LargedLogged, Logged} from "./DMenu";


const styles = {
    bar: {
        width:'100%',
        backgroundColor:'#fff',
        opacity:0.88,
        minHeight:60,
        borderBottom:'5px solid #dc3c00'
    },
    logo: {
        cursor: 'pointer',
        paddingTop: 20
    },
};

export default class DHeader extends Component {

    render() {
        return <nav class="navbar bg-dark" style={styles.bar}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-6" style={{textAlign:'right'}}>
                        <LogoContainer />
                    </div>
                    <div className="col-6" style={{textAlign:'left'}}>
                        <LargedLogged />
                    </div>
                </div>
            </div>
        </nav>
    }
}
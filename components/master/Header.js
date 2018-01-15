import React,{Component} from 'react';
import LoginBar from '../user/LoginBar'
import LogoContainer from './LogoContainer'

function handleTouchTap() {
    alert('onClick triggered on the title component');
}

const styles = {
    bar: {
        backgroundColor:'#fff',
        opacity:0.88,
        minHeight:105
    },
    logo: {
        cursor: 'pointer',
        paddingTop: 20
    },
};

export default class Header extends Component {


    render() {
        return <nav class="navbar bg-dark" style={styles.bar}>
            <div className="container">
                <div className="row align-items-center">
                    <LogoContainer />
                    <LoginBar />
                </div>
            </div>
        </nav>
    }
}
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Checkbox from "material-ui/Checkbox";
import Paper from "material-ui/Paper";
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import {FontIcon, IconButton} from "material-ui";

const styles = {
    root: {
        height: 330,
        width: 300,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
    },
    image: {
        height: 290,
        width: 290,
        marginTop: 5,
        marginRight: 5
    }
};

export default class WebTemplate extends Component {
    static propTypes = {
        image:PropTypes.string,
        title:PropTypes.string,
        link:PropTypes.string
    };
    constructor(props){
        super(props);
    }

    render() {
        const {
            image,
            title,
            link
        } = this.props;
        return <Paper style={styles.root} zDepth={1}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <img src={image} style={styles.image}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span>{title}</span>
                    </div>
                    <div className="col">
                        <Checkbox
                            checkedIcon={<ActionFavorite />}
                            uncheckedIcon={<ActionFavoriteBorder />}
                            label="Custom icon"
                            style={styles.checkbox}
                        />
                        <IconButton tooltip="Font Icon">
                            <FontIcon className="fa fa-link" />
                        </IconButton>
                    </div>
                </div>
            </div>
        </Paper>
    }
}

import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText, FlatButton} from "material-ui";


const styles = {
    root : {
        width : '100%',
        height : '100%',
    },
};
export default class Ads extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let width = this.context.width;
        let screenType = this.context.screenType;
        return <div  style={styles.root}>
                <Card style={{width:'70%', opacity:.7, marginTop: 10}}>
                    <CardHeader
                        title="عنوان تبلیغ"
                        titleColor="#000"
                        subtitle="توضیح"
                        subtitleColor="#666"
                        actAsExpander={true}
                        showExpandableButton={false}
                    />
                    <CardText expandable={false}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                        <FlatButton label="بیشتر" primary={true}/>
                    </CardActions>
                </Card>
            </div>
    }
}

Ads.contextTypes = {
    screenType: PropTypes.string,
    width:PropTypes.number
};

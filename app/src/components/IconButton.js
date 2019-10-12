import React, {Component} from 'react'
import {Button, Icon} from "react-native-ui-kitten";
import {View} from "react-native";

const UpdateIcon = (style) => (
    <Icon name='edit' {...style} width={32} height={32} fill='#424242'/>
);


export default class IconButton extends Component {


    render() {
        return (
            <Button style={{
                width: 40,
                height: 40,
                fontSize: 30,
                backgroundColor: 'transparent',
                borderColor: 'transparent'
            }} icon={this.props.icon} onPress={() => {
                alert("test succ")
            }}>
                {this.props.text}
            </Button>
        );
    }
}

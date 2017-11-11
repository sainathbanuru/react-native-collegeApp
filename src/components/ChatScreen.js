import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';

export default class ChatScreen extends Component{

	static navigationOptions = {
	    title: 'Chat with Lucy',
	    headerTintColor: 'green'
	};
	render() {
		const { navigate} = this.props.navigation;
		const { params } = this.props.navigation.state;
	    return (
	      <View>
	        <Text>Chat with {params.user}</Text>
	        <Button 
	        	title= "Group Chat"
	        	onPress={() => navigate('Group')}
	        /> 
	      </View>
	    );
	}
}
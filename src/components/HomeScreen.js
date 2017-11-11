import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';

export default class HomeScreen extends Component{

	static navigationOptions = {
    	title: 'Welcome',
    	headerTintColor: 'black',
  	};
 	
 	render() {
    	const { navigate } = this.props.navigation;
    	return (
	      <View>
	        <Text>Hello, Here any one can Chat!</Text>
	        <Button
	          onPress={() => navigate('Chat', { user: 'sainath' })}
	          title="Go to chat"
	        />
	      </View>
    	);
  	}

}
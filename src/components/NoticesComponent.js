import React, { Component } from 'react';
import { View, Text} from 'react-native';


export default class NoticesComponent extends Component{

	static navigationOptions = {

		title: 'Notices',
		headerTintColor: 'white',
		headerStyle: {
	      height: 60,
	      backgroundColor: 'steelblue'
	    },	
	}

	render(){

		return(
			<View>
				<Text>Notices</Text>
			</View>
		);
	}

}
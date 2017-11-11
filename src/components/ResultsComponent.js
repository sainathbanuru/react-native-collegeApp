import React, { Component } from 'react';
import { View, Text} from 'react-native';

export default class ResultsComponent extends Component{

	static navigationOptions = {

		title : 'Results',
		headerTintColor: 'white',
		headerStyle: {
	      height: 60,
	      backgroundColor: 'steelblue'
	    },	

	}

	render(){

		return (
			<View>
				<Text>Results</Text>
			</View>	
		);
	}
}
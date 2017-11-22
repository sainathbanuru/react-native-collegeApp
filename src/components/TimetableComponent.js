import React, { Component } from 'react';
import { View, Text} from 'react-native';

export default class Timetablecomponent extends Component{

	static navigationOptions = {

		title : 'Timetable',
		headerTintColor: 'white',
		headerStyle: {
	      height: 60,
	      backgroundColor: 'steelblue'
	    },	

	}

	render(){

		return (
			<View>
				<Text>Timetable</Text>
			</View>	
		);
	}
}
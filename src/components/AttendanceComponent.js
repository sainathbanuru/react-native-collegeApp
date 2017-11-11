import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AttendaceComponent extends Component{

	static navigationOptions = {
		title: 'Attendance',
    	headerTintColor: 'white',
		headerStyle: {
	      height: 60,
	      backgroundColor: 'steelblue'
	    },
	}	

	render(){

		return(

			<Text>Attendance</Text>

		);
	}

} 
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({



});
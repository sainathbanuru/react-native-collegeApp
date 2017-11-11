import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class CourseDetails extends Component{

	static navigationOptions = {

		title: 'Course',
		headerTintColor: 'white',
		headerStyle: {
	      height: 60,
	      backgroundColor: 'steelblue'
	    },	
	}


	render() {
		return (
			<View>
				<Text>Courses</Text>
			</View>
		);
	}
} 
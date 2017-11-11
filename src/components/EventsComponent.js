import React, { Component } from 'react';
import { View, Text} from  'react-native';

export default class EventsComponent extends Component{

	static navigationOptions = {

		title: 'Events',
		headerTintColor: 'white',
		headerStyle: {
	      height: 60,
	      backgroundColor: 'steelblue'
	    },	
	}

	render(){
		return(

			<View>
				<Text>Events</Text>
			</View>

		);
	}
}
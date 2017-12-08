import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './Card';


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

			<Card>
				<View style={ styles.containerStyle }>

					<Text>No. of Absents</Text>
					<Text style={ styles.absentNumberStyle }>10</Text>
					<Text>Month:  November</Text>

				</View>
			</Card>	
		);
	}

}

const styles = StyleSheet.create({

	containerStyle: {

		padding: 10,
		justifyContent: 'center',
		alignItems: 'center'

	},

	absentNumberStyle: {

		fontSize: 60,
		color: '#B71C1C'

	}

});
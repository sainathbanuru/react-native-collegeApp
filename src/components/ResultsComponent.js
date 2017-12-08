import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Card from './Card';

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
			
			<Card>
				<View style={styles.courseContainerStyle}>
					<Text style={ styles.semesterStyle }>B.Tech in CSE</Text>
					<View style={{ flexDirection: 'row'}}>

						<View style={styles.gpaContainerStyle}>

							<Text style = { styles.gpaNumberStyle}>7.0</Text>
							<Text style={{ color: '#D50000'}}>SGPA(prev sem)</Text>		

						</View>

						<View style={styles.gpaContainerStyle}>

							<Text style = { styles.gpaNumberStyle}>7.73</Text>
							<Text style={{ color: '#D50000'}}>CGPA</Text>		

						</View>
							

					</View>
				</View>
			</Card>	

		);
	}
}


const styles = StyleSheet.create({

	courseContainerStyle: {

		padding: 10

	},
	semesterStyle: {

		fontSize: 28,
		alignSelf: 'center',
		color: '#311B92'
	},
	gpaContainerStyle: { 
		flex: 1, 
		justifyContent:'center',
		alignItems: 'center',
		margin: 15
	},
	gpaNumberStyle: {
		fontSize: 36,
	}


});
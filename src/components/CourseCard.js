import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class CourseCard extends Component{

	render() {

		return(

			<View style={ styles.cardStyle }>

				{ this.props.children }

			</View>

		);
	}

}


const styles = StyleSheet.create({


	cardStyle: {

		borderRadius: 5,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		elevation: 2,
		marginRight: 5,
		marginLeft:5,
		marginTop:10,
	}

});
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class Card extends Component{

	render() {

		return(

			<View style={ styles.cardStyle }> 
				{this.props.children}
			</View>
		);
	}
}


const styles = StyleSheet.create({

	cardStyle: {

		borderRadius: 5,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2},
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 2,
		marginRight: 5,
		marginLeft:5,
		marginTop:10,

	}
});


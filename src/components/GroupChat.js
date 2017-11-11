import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class GroupChat extends Component{

	static navigationOptions = {
    	title: 'Group Chat',
    	headerTintColor: 'steelblue',
  	};

	render(){

		return(
			<View>
				<Text style={styles.textStyle}>Welcome to grou chat</Text>
			</View>
		);
	}

}


const styles = StyleSheet.create({
	textStyle: {

		fontSize: 15,
		color: 'red',
		textAlign: 'center'
	}
})
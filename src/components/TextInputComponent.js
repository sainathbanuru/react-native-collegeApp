import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class TextInputScreen extends Component{

	render(){
		const { componentStyle, containerStyle } = styles
		return (
			
			<View style={ containerStyle}>
				<TextInput
					style = {componentStyle}
					placeholder={this.props.TextHint}
				/>

			</View>	
		);
	}
} 

const styles = StyleSheet.create({

	componentStyle: {

		height: 40,
		padding: 8
	
	},

	containerStyle: {
		margin: 5,
		padding: 8
	}
})
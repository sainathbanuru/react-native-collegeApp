import React, { Component } from 'react';
import { View, Text, Button, Picker, ToastAndroid } from 'react-native';
import TextInputComponent from './TextInputComponent';
import Card from './Card';


export default class RequestFormComponent extends Component{

	static navigationOptions = {

		title: "Form Request",
		headerTintColor: 'white',

		headerStyle:{
			height: 60,
			backgroundColor: 'steelblue'
		}
	}

	render(){

		return(

			<Card>
				<TextInputComponent  
					TextHint="Name"
				/>

				<TextInputComponent  
					TextHint="Roll No."
				/>

				<TextInputComponent  
					TextHint="E-mail"
				/>

				<Picker
					style={{ marginLeft: 5}}
					onValueChange={(itemValue) => ToastAndroid.show(itemValue, ToastAndroid.SHORT) }
					prompt= "Select Form"

				>
					<Picker.Item label="-- Select Form --" value="dummy" /> 
					<Picker.Item label="Bonafide" value="bonafide" /> 
					<Picker.Item label="NOC" value="noc" />
					<Picker.Item label="Marks sheet" value="marks" />

				</Picker>

				<View style={{ padding: 5, marginBottom: 10 }}>
					<Button
						title= "Submit"
						onPress={() => {}}
					/>
				</View>	
			</Card>

		);
	}

}
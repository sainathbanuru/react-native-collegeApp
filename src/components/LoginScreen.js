import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ToastAndroid, Image } from 'react-native';
import firebase from 'firebase';
import TextInputComponent from './TextInputComponent';

export default class LoginScreen extends Component{

	static navigationOptions = {
    	header: null,
  	};

  	onButtonPress(){

  		ToastAndroid.show("login button pressed", ToastAndroid.SHORT);

		/*this.setState({ error : '', loading : true})

		firebase.auth().signInWithEmailAndPassword( email, password)
			.catch( () => {

				firebase.auth().createUserWithEmailAndPassword(email, password)
					.catch( () => {
						this.setState({ error : "Authentication failed"});
					});

			});
		*/


	}


	render(){
		const { navigate} = this.props.navigation;

		return (

			<View style={{ justifyContent: 'center', flex:1, backgroundColor: 'white'}}>
				
				<View style={ styles.cardViewContainer }>
				
					<View style={styles.container}>
				
						<View style={{ alignItems: 'center'}}>
							<Text style={styles.loginTextStyle}>LogIn Form</Text>
						</View>
				
						<TextInputComponent TextHint="Enter your email" titleText="Email"/>
						<TextInputComponent TextHint="Enter your password" titleText="Password"/>
						<View style={{ margin: 10, padding:10}}>
							<Button
								title="Log In"
								onPress={() => navigate('list')}
							/>
						</View>
				
					</View>
				
				</View>

			</View>	
		);
	}
}


const styles = StyleSheet.create({



	cardViewContainer:{
		backgroundColor: 'white',
		margin:5,
		height: 260,
		padding: 10,
		borderRadius: 10,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 5},
		shadowOpacity: 5,
		elevation:10
	},

	container: {
		backgroundColor: 'white',
		justifyContent: 'center',
	},

	loginTextStyle: {
		fontSize: 32,
		color: 'grey',
		textAlign: 'center',
		alignItems:'center',
		borderBottomWidth:2,
		borderBottomColor: 'grey'
	}

});
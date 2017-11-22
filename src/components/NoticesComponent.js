import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Card from './Card';

export default class NoticesComponent extends Component{

	static navigationOptions = {

		title: 'Notices',
		headerTintColor: 'white',
		headerStyle: {
	      height: 60,
	      backgroundColor: 'steelblue'
	    },	
	}

	render(){

		return(

			<ScrollView>
				
				<Card>
					
					<View style={styles.containerStyle}>

						<Text style={styles.titleStyle}>
							Winter is Here
						</Text>
						<Text>
							Header is only available for StackNavigator.

	In the previous example, we created a StackNavigator to display several screens in our app.

	When navigating to a chat screen, we can specify params for the new route by providing them to the navigate function. In this case, we want to provide the name of the person on the chat screen:
						</Text>
					</View>

				</Card>

				<Card>
					
					<View style={styles.containerStyle}>

						<Text style={styles.titleStyle}>
							Winter is Here
						</Text>
						<Text>
							Header is only available for StackNavigator.

	In the previous example, we created a StackNavigator to display several screens in our app.

	When navigating to a chat screen, we can specify params for the new route by providing them to the navigate function. In this case, we want to provide the name of the person on the chat screen:
						</Text>
					</View>

				</Card>

				<Card>
					
					<View style={styles.containerStyle}>

						<Text style={styles.titleStyle}>
							Winter is Here
						</Text>
						<Text>
							Header is only available for StackNavigator.

	In the previous example, we created a StackNavigator to display several screens in our app.

	When navigating to a chat screen, we can specify params for the new route by providing them to the navigate function. In this case, we want to provide the name of the person on the chat screen:
						</Text>
					</View>

				</Card>

				<Card>
					
					<View style={styles.containerStyle}>

						<Text style={styles.titleStyle}>
							Winter is Here
						</Text>
						<Text>
							Header is only available for StackNavigator.

	In the previous example, we created a StackNavigator to display several screens in our app.

	When navigating to a chat screen, we can specify params for the new route by providing them to the navigate function. In this case, we want to provide the name of the person on the chat screen:
						</Text>
					</View>

				</Card>

			</ScrollView>	
		);
	}

}

const styles = StyleSheet.create({

	containerStyle: {

		flex:1,
		padding:10

	},

	titleStyle: {

		fontSize: 30,
		color: '#4527A0'
	}

});
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from  'react-native';
import Card from './Card';

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
			<ScrollView>

				<Card>
					<View style={{ flexDirection:'row', flex:1 }}>

						<View style={[styles.dateContainerStyle, { justifyContent: 'center', alignItems: 'center', flex:4 }]}>
							<Text style={[styles.dateStyle, { fontSize: 75}]}>
								26
							</Text>
							<Text style={[styles.dateStyle, { fontSize:20}]}>
								october
							</Text>
						</View>

						<View style={[styles.containerStyle, { flex : 6}]}>

							<Text style={styles.titleStyle}>
								Winter is Here
							</Text>
							<Text>
								Header is only available for StackNavigator.

								In the previous example, we created a StackNavigator to display several screens in our app.

							</Text>
						</View>

					</View>	
				</Card>

				<Card>
					<View style={{ flexDirection:'row', flex:1 }}>

						<View style={[styles.dateContainerStyle, { justifyContent: 'center', alignItems: 'center', flex:4 }]}>
						
							<Text style={[styles.dateStyle, { fontSize: 75}]}>
								18
							</Text>
							<Text style={[styles.dateStyle, { fontSize:20}]}>
								March
							</Text>
						
						</View>

						<View style={[styles.containerStyle, { flex : 6}]}>

							<Text style={styles.titleStyle}>
								Winter is Here 
							</Text>
							<Text>
								Header is only available for StackNavigator.

								In the previous example, we created a StackNavigator to display several screens in our app.

							</Text>
						
						</View>

					</View>	
				</Card>

				<Card>
					<View style={{ flexDirection:'row', flex:1 }}>

						<View style={[styles.dateContainerStyle, { justifyContent: 'center', alignItems: 'center', flex:4 }]}>
						
							<Text style={[styles.dateStyle, { fontSize: 75}]}>
								1
							</Text>
							<Text style={[styles.dateStyle, { fontSize:20}]}>
								January
							</Text>
						
						</View>

						<View style={[styles.containerStyle, { flex : 6}]}>

							<Text style={styles.titleStyle}>
								Winter is Here
							</Text>
							<Text>
								Header is only available for StackNavigator.

								In the previous example, we created a StackNavigator to display several screens in our app.

							</Text>
						
						</View>

					</View>	
				</Card>

				<Card>
					<View style={{ flexDirection:'row', flex:1 }}>

						<View style={[styles.dateContainerStyle, { justifyContent: 'center', alignItems: 'center', flex:4 }]}>
							
							<Text style={[styles.dateStyle, { fontSize: 75}]}>
								26
							</Text>
							<Text style={[styles.dateStyle, { fontSize:20}]}>
								october
							</Text>

						</View>

						<View style={[styles.containerStyle, { flex : 6}]}>

							<Text style={styles.titleStyle}>
								Winter is Here
							</Text>
							<Text>
								Header is only available for StackNavigator.

								In the previous example, we created a StackNavigator to display several screens in our app.

							</Text>
						
						</View>

					</View>	
				</Card>

			</ScrollView>	

		);
	}
}

const styles = StyleSheet.create({

	dateContainerStyle: {

		backgroundColor: '#B71C1C',
		borderRadius:5,
		marginRight:2,
		marginLeft:2,
		marginTop:1,
		flex:1
	},

	dateStyle:{
		
		color: 'white'
	},
	containerStyle: {

		flex:1,
		padding:10

	},

	titleStyle: {

		fontSize: 30,
		color: '#4527A0'
	}

});
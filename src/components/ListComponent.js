import React, { Component } from 'react';
import { View, Text, ListView, FlatList, StyleSheet,ToastAndroid,TouchableNativeFeedback } from 'react-native';



export default class ListComponent extends Component{



	GetItem (item) {
   		const { navigate } = this.props.navigation;

   		switch(item.id){

   			case 1:
				navigate('attendance');
				break;

			case 2:
				navigate('course');
				break;	

			case 3:
				navigate('notices');
				break;
			
			case 4:
				navigate('results');
				break;

			case 5:
				navigate('events');
				break;

			case 6: 	
   		}
	 
	}

	renderRow(item){
		if (item.id % 2 ==0) {
			return(
				
				<TouchableNativeFeedback onPress={this.GetItem.bind(this, item)}>
					<View style={[styles.rowStyles, {backgroundColor: item.color, alignItems: 'flex-end'}]}  >
						<Text style={styles.textStyle}> { item.title }</Text>
						<Text style={styles.descStyle}> { item.desc }</Text>
					</View>
				</TouchableNativeFeedback>	
			
			);		
		}
		else{

			return(

				<TouchableNativeFeedback onPress={this.GetItem.bind(this, item)}>
					<View style={[styles.rowStyles, {backgroundColor: item.color, alignItems: 'flex-start'}]}>
						<Text style={styles.textStyle}> { item.title }</Text>
						<Text style={styles.descStyle}> { item.desc }</Text>
					</View>
				</TouchableNativeFeedback>
			
			);
		}
		
	}
	
	

	render() {
		return(

				<FlatList 

					data={this.props.dataSource} 
					renderItem={({item}) => this.renderRow(item)}
					keyExtractor={item => item.id}

				/>

			);
	}
}

const styles = StyleSheet.create({
	
	rowStyles: {

		marginTop: 10,
		marginRight: 10,
		marginLeft: 10,
		height: 150,
		justifyContent: 'center',
		elevation: 3
		
	},

	textStyle:{
	
		color: 'white',
		fontSize: 28,
		marginRight: 10,
		marginLeft:10
	},

	descStyle: {
	
		color: 'white',
		fontSize: 12,
		marginLeft: 10,
		marginRight:10
	}
});
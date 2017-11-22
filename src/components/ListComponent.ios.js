import React, { Component } from 'react';
import { View, Text, ListView, FlatList, StyleSheet,ToastAndroid,TouchableNativeFeedback,TouchableOpacity, Image } from 'react-native';



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
				navigate('results');
				break;
			
			case 4:
				navigate('notices');
				break;

			case 5:
				navigate('events');
				break;

			case 6:
				navigate('timetable');
				break;
					
   		}
	 
	}

	renderRow(item){
		
		let img = item.img;

		if (item.id % 2 ==0) {
			return(
				
				<TouchableOpacity onPress={this.GetItem.bind(this, item)}>
					<View  style={[styles.rowStyles, {backgroundColor: item.color, flexDirection: 'row', alignItems : 'center', flex:1}]}>

						<View style={{ flex: 3, justifyContent: 'flex-start'}}>

								<Image source={img} style={{ height: 100, width:100, marginLeft: 10}} />

						</View>

						<View style={{ flex: 5, justifyContent: 'flex-end', margin: 15}}>
							<Text style={styles.textStyle}> { item.title }</Text>
							<Text style={styles.descStyle}> { item.desc }</Text>
						</View>
					
					</View>	
				</TouchableOpacity>	
			
			);		
		}
		else{

			
			return(

				<TouchableOpacity onPress={this.GetItem.bind(this, item)}>
					<View  style={[styles.rowStyles, {backgroundColor: item.color, flexDirection: 'row', alignItems : 'center', flex:1}]}>

						<View style={{ flex: 5, justifyContent: 'flex-end', margin:10}}>
							<Text style={styles.textStyle}> { item.title }</Text>
							<Text style={styles.descStyle}> { item.desc }</Text>
						</View>

						<View style={{ flex: 3, justifyContent: 'flex-end'}}>

								<Image source={img}  style={{ height: 100, width:100, marginRight: 10}} />

						</View>
					
					</View>	
				</TouchableOpacity>	
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
		marginLeft: 15,
		marginRight:10
	}
});
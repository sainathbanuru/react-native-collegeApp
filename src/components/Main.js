import React, { Component } from 'react';
import { View, Text, Button, ToastAndroid, ListView, StyleSheet} from 'react-native';
import ListComponent from './ListComponent'


const data = [
  {id : 1, title: "Attendance", color: "grey", desc: "Here you can find the details of your Attendance "},
  {id : 2, title: "Course Details", color: "green", desc: "Find details about your registration"},
  {id : 3, title: "Notices", color: "steelblue", desc: "Any Notices?"},
  {id : 4, title: "Results", color: "red", desc:"Results of the exams "},
  {id : 5, title: "Events", color: "blue", desc:"Events happening in the college"},
  {id : 6, title: "TimeTable", color: "black", desc: "Your daily class schedule"},
]

export default class Main extends Component{
	
	static navigationOptions = {

    	title: 'Dashboard',
    	headerTintColor: 'white',
	    headerStyle: {
	      height: 60,
	      backgroundColor: 'steelblue'
	    
	    },
  	};

	constructor() {
		
		super();
	
	}


	buttonPress(){
    
    	ToastAndroid.show("React Native", ToastAndroid.SHORT);
  	
  	}

	render() {
	
		return(
				<View style={{ backgroundColor: '#fff'}}>
					<ListComponent 
						dataSource={data}
						navigation={this.props.navigation}
					 />
				</View>
			);
	}
}

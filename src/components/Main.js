import React, { Component } from 'react';
import { View, Text, Button, ToastAndroid, ListView, StyleSheet} from 'react-native';
import ListComponent from './ListComponent'


const data = [
  {id : 1, title: "Attendance", color: "#01579B", desc: "Here you can find the details of your Attendance ", img: require('../images/attendance_white.png')},
  {id : 2, title: "Course Details", color: "#7B1FA2", desc: "Find details about your registration", img: require('../images/examperfo_dashboard.png')},
  {id : 3, title: "Results", color: "#512DA8", desc:"Results of the exams ", img: require('../images/results_dashboard.png')},
  {id : 4, title: "Notices", color: "#009688", desc: "Any Notices?", img: require('../images/ic_notification_white.png')},
  {id : 5, title: "Events", color: "steelblue", desc:"Events happening in the college", img: require('../images/timeline_dashboard.png')},
  {id : 6, title: "TimeTable", color: "#1A237E", desc: "Your daily class schedule", img: require('../images/schedule_dashboard.png')},
  {id : 7, title: "Form Request", color: "#2E7D32", desc: "Forms like bonafide, NOC, marks  sheet can be requested", img: require('../images/schedule_dashboard.png')},
]

export default class Main extends Component{
	
	static navigationOptions = {

    	title: 'Home',
    	headerLeft: null,
    	headerTintColor: 'white',
	    headerStyle: {
	      height: 60,
	      backgroundColor: 'steelblue',
	    
	    },
	    headerTitleStyle : {
	    	fontSize: 24
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

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CourseCard from './CourseCard';


export default class CourseDetails extends Component{

	static navigationOptions = {

		title: 'Course',
		headerTintColor: 'white',
		headerStyle: {
	      height: 60,
	      backgroundColor: 'steelblue'
	    },	
	}


	render() {
		return (
			<CourseCard>

				<View style={styles.courseContainerStyle}>

					<Text style={ styles.semesterStyle }>Semester 1</Text>
					<View style={{ marginTop: 10, marginBottom: 10 }}>
						<Text style={ styles.subjectStyle }>Computer Programming</Text>
						<Text style={ styles.subjectStyle }>Computer Newtworking</Text>
						<Text style={ styles.subjectStyle }>Digital logic and design</Text>
						<Text style={ styles.subjectStyle }>Communication skills</Text>
						<Text style={ styles.subjectStyle }>Basic electronic circuits</Text>
						<Text style={ styles.subjectStyle }>Computer Architecture</Text>
						<Text style={ styles.subjectStyle }>Database management system</Text>
						<Text style={ styles.subjectStyle }>Theory of computation</Text>
					</View>

				</View>

			</CourseCard>
		);
	}
} 


const styles = StyleSheet.create({

	courseContainerStyle: {

		padding: 10

	},

	semesterStyle: {

		fontSize: 28,
		alignSelf: 'center',
		color: '#311B92'
	},

	subjectStyle: {

		fontSize: 16,
		color: '#455A64'

	}

})
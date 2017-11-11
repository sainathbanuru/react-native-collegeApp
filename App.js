import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, ToastAndroid, ToolbarAndroid } from 'react-native';
import Main from './src/components/Main'
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/components/HomeScreen';
import ChatScreen from './src/components/ChatScreen';
import GroupChat from './src/components/GroupChat';
import LoginScreen from './src/components/LoginScreen';
import AttendanceComponent from './src/components/AttendanceComponent';
import ResultsComponent from './src/components/ResultsComponent';
import CourseComponent from './src/components/CourseComponent';
import NoticesComponent from './src/components/NoticesComponent';
import EventsComponent from './src/components/EventsComponent';


export const SimpleApp = StackNavigator({
  Home: { screen: LoginScreen },
  Chat: { screen: ChatScreen },
  Group: { screen: GroupChat},
  list: { screen: Main },
  attendance: { screen : AttendanceComponent},
  results: { screen : ResultsComponent},
  course : { screen : CourseComponent},
  notices: { screen : NoticesComponent},
  events: { screen : EventsComponent},

});


export default class App extends React.Component {
  render() {
    return (
        <View style={ styles.container }>
          <StatusBar hidden={true}/>
          < SimpleApp />
        </View>  
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

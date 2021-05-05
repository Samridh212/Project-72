import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';

export default class ReadStoryScreen extends React.Component{
render(){
    return(
        <View style ={styles.container}>
          <Text>Read StoryS</Text>
        </View>
    );
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Book extends Component {
  static navigationOptions = {
    title: 'flex布局',
    tabBarLabel: '布局',
    alignSelf: 'center',
    headerStyle: {
      height: 49,
      backgroundColor: '#fff',
    },
    headerTitleStyle: {
      alignSelf: 'center',
    },
    tabBarIcon: ({ tintColor }) => (<Icon name="ios-book" color={tintColor} size={22} />),
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.wrap}>
          <View style={[styles.box, styles.box1]}>
            <Text style={styles.welcome}>
              1
            </Text>
          </View>
          <View style={[styles.box, styles.box2]}>
            <Text style={styles.welcome}>
              2
            </Text>
          </View>
          <View style={[styles.box, styles.box3]}>
            <Text style={styles.welcome}>
              3
            </Text>
          </View>
        </View>
        <View style={styles.wrap}>
          <View style={[styles.box, styles.three1]}>
            <Text style={styles.welcome}>
              5
            </Text>
          </View>
          <View style={styles.fivecontainer}>
            <View style={[styles.box, styles.three2]}>
              <Text style={styles.welcome}>
                6
              </Text>
            </View>
            <View style={[styles.box, styles.three3]}>
              <Text style={styles.welcome}>
                7
              </Text>
            </View>
          </View>  
        </View>
        <View style={styles.panels}>
          <Text style={styles.item}>this is panels.</Text>
        </View>
        <View style={styles.panels}>
          <Text style={styles.item}>this is panels.</Text>
        </View>
        <View style={styles.panels}>
          <Text style={styles.item}>this is panels.</Text>
        </View>
        <View style={styles.panels}>
          <Text style={styles.item}>this is panels.</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  wrap: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  box: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    backgroundColor: '#4AF2A1',
  },
  box2: {
    flex: 2,
    backgroundColor: '#B0F566',
  },
  box3: {
    flex: 3,
    backgroundColor: '#5CC9F5',    
  },
  welcome: {
    textAlign: 'center',
  },
  fivecontainer: {
    flex: 1,
  },
  three1: {
    height: 200,
    backgroundColor: '#6638F0',
  },
  three2: {
    height: 100,
    backgroundColor: '#F78AE0',
  },
  three3: {
    height: 100,
    backgroundColor: '#B0F566',
  },
  panels: {
    height: 60,
    marginTop: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  item: {
    textAlign: 'center'
  }
});
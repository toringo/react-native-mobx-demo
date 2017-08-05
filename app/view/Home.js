import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { observer } from 'mobx-react/native';
import hostUser from '../store/mobx';


@observer
export default class Home extends Component {
  static navigationOptions = {
    title: '震援',
    tabBarLabel: '首页',
    alignSelf: 'center',
    headerStyle: {
      height: 49,
      backgroundColor: '#fff',
    },
    headerTitleStyle: {
      alignSelf: 'center',
    },
    tabBarIcon: ({ tintColor }) => (<Icon name="ios-home" color={tintColor} size={22} />),
  }
  render() {
    return (
      <View style={styles.wrap}>
        <ImageBackground
          style={styles.image}
          source={require('../image/bg.png')}
          resizeMode="cover"
        >
          <View style={styles.extend}>
            <Text>{hostUser.user.name}-{hostUser.user.username}</Text>          
          </View>  
          <View style={styles.container}>
            <View style={styles.box}><Text style={styles.text}>逃生攻略</Text></View>
            <View style={styles.box}><Text style={styles.text}>应急包</Text></View>
            <View style={styles.box}><Text style={styles.text}>救助设置</Text></View>
            <View style={styles.box}><Text style={styles.text}>避难点</Text></View>
          </View>
        </ImageBackground>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  extend: {
    flex: 1,
    justifyContent: 'space-around',
    width: '100%',
    height: '40%',
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignContent: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap', 
    // backgroundColor: '#EBF8FD',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  box: {
    justifyContent: 'space-around',
    width: '43%',
    height: '43%',
    backgroundColor: '#FEFFFF',
    borderRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: '#29A4DE',
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  text: {
    textAlign: 'center',
  }
});
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { observer, inject } from 'mobx-react/native';
import hostUser from '../store/mobx';

// 引用store mobx文件
// @inject('mobx')
@observer
export default class Love extends Component {
  static navigationOptions = {
    title: '爱心救助',
    tabBarLabel: '爱心救助',
    alignSelf: 'center',
    headerStyle: {
      height: 49,
      backgroundColor: '#fff',
    },
    headerTitleStyle: {
      alignSelf: 'center',
    },
    tabBarIcon: ({ tintColor }) => (<Icon name="ios-heart" color={tintColor} size={22} />),
  }
  render() {
    console.log('props', this.props);
    const { mobx } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.love}>Love</Text>  
        <View style={styles.counter}>
          <TouchableHighlight
            style={styles.welcome}  
            onPress={() => { hostUser.add() }}
          >
            <Text>Add</Text>
          </TouchableHighlight>
          <Text style={styles.welcome}>
            {hostUser.stores.num}
          </Text>
          <TouchableHighlight
            style={styles.welcome}  
            onPress = {() => {hostUser.minus()}}>
              <Text>Minus</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  love: {
    fontSize: 40,
    margin: 40
  },
  counter: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  welcome: {
    padding: 30
  }
});
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
  Alert,
  AlertIOS,
  ToastAndroid,
  Dimensions,
  RefreshControl,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Book from './Item';


export default class Panels extends Component {
  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    }),
    data: [
      {
        grade: 9.3,
        title: '人类简史',
        num: 5,
        author: '尤瓦尔·赫拉利',
        publish: '湛庐文化出版社',
        time: 2015,
        picture:
          'https://imgsa.baidu.com/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=b52bcf617f094b36cf9f13bfc2a517bc/9c16fdfaaf51f3de300988da9deef01f3b2979d0.jpg'
      },
      {
        grade: 9.3,
        title: '未来简史',
        num: 5,
        author: '尤瓦尔·赫拉利',
        publish: '湛庐文化出版社',
        time: 2015,
        picture:
          'https://imgsa.baidu.com/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=b52bcf617f094b36cf9f13bfc2a517bc/9c16fdfaaf51f3de300988da9deef01f3b2979d0.jpg'
      },
    ]
  }
  static navigationOptions = {
    title: '列表',
    tabBarLabel: '列表',
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
  renderRow(data) {
    return (
      <Book
        data={data}
      />
    )
  }
  render() {
    return (
      <View style={styles.booklist}>
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
          renderRow={(rowData) => this.renderRow(rowData)}
        />
        <CustomButton text='点击弹出默认Alert'
          onPress={()=>Alert.alert('温馨提醒','确定退出吗?')}
        />
        <CustomButton text='点击弹出三个按钮的Alert'
          onPress={()=>Alert.alert('温馨提醒','确定退出吗?',[
            {text:'One',onPress:()=>ToastAndroid.show('你点击了One~',ToastAndroid.SHORT)},
            {text:'Two',onPress:()=>ToastAndroid.show('你点击了Two~',ToastAndroid.SHORT)},
            {text:'Three',onPress:()=>ToastAndroid.show('你点击了Three~',ToastAndroid.SHORT)}
            ])}
        />
        <CustomButton text='弹出两个按钮的弹出框-输入框存在默认信息' onPress={()=>AlertIOS.prompt('温馨提醒','请输入相关信息',[
           {text:'取消',onPress:()=>console.log('点击了取消'),style:'cancel'},
           {text:'确定',onPress:()=>console.log('点击了确定'),style:'default'}
          ], 'plain-text', '我是默认信息')}
        />
      </View>
    );
  }
}

class CustomButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  },
  buttonText: {
    color: '#666',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  booklist: {
    flex: 1,
    width: Dimensions.get("window").width,

  },
  list: {
    height: Dimensions.get("window").height
  }
});
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { observer, inject } from 'mobx-react/native';
import hostUser from '../store/mobx';

// 引用store mobx文件
@inject('mobx')
@inject('list')  
@observer
export default class Love extends Component {
  state = {
    text: '',
    showInput: false
  }
  static navigationOptions = {
    title: 'Mobx',
    tabBarLabel: 'MOBX',
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
  componentWillMount() {
    this.props.list.list = [];
  }
  toggleInput () {
    this.setState({ showInput: !this.state.showInput })
  }
  addListItem() {
    this.props.list.addListItem(this.state.text)
    this.setState({
      text: '',
      showInput: !this.state.showInput
    })
  }
  removeListItem (item) {
    this.props.list.removeListItem(item)
  }
  updateText (text) {
    this.setState({text})
  }
  addItemToList (item) {
    this.props.navigator.push({
      component: NoList,
      type: 'Modal',
      passProps: {
        item,
        store: this.props.store
      }
    })
  }
  render() {
    console.log('props', this.props.list);
    const { add, minus } = this.props.mobx;
    const { list } = this.props.list;
    const { showInput } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.love}>Love</Text>  
        <View style={styles.counter}>
          <TouchableHighlight
            style={styles.welcome}  
            onPress={() => { add() }}
          >
            <Text>Add</Text>
          </TouchableHighlight>
          <Text style={styles.welcome}>
            {this.props.mobx.stores.num}
          </Text>
          <TouchableHighlight
            style={styles.welcome}  
            onPress = {() => { minus() }}>
              <Text>Minus</Text>
          </TouchableHighlight>
        </View>
        <ScrollView style={{flex:1, width: '100%'}}>
          {list.map((l, i) => {
            return <View key={i} style={styles.itemContainer}>
              <Text
                style={styles.item}
              >{l.name.toUpperCase()}</Text>
              <Text
                style={styles.deleteItem}
                onPress={this.removeListItem.bind(this, l)}>Remove</Text>
            </View>
          })}
        </ScrollView>
        <TouchableHighlight
          underlayColor='transparent'
          onPress={
            this.state.text === '' ? this.toggleInput.bind(this)
            : this.addListItem.bind(this, this.state.text)
          }
          style={styles.button}>
          <Text style={styles.buttonText}>
            {this.state.text === '' && '+ New List'}
            {this.state.text !== '' && '+ Add New List Item'}
          </Text>
        </TouchableHighlight>
        {showInput && <TextInput
          style={styles.input}
          onChangeText={(text) => this.updateText(text)} />}
      </View>
    );
  }
}

const NoList = () => (
  <View style={styles.noList}>
    <Text style={styles.noListText}>No List, Add List To Get Started</Text>
  </View>
)

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
  },
  itemContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ededed',
    flexDirection: 'row'
  },
  item: {
    color: '#156e9a',
    fontSize: 18,
    flex: 3,
    padding: 20
  },
  deleteItem: {
    flex: 1,
    padding: 20,
    color: '#a3a3a3',
    fontWeight: 'bold',
    marginTop: 3
  },
  button: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#156e9a'
  },
  buttonText: {
    color: '#156e9a',
    fontWeight: 'bold'
  },
  heading: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#156e9a'
  },
  headingText: {
    color: '#156e9a',
    fontWeight: 'bold'
  },
  input: {
    height: 70,
    width: '100%',
    backgroundColor: '#f2f2f2',
    padding: 20,
    color: '#156e9a'
  },
  noList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noListText: {
    fontSize: 22,
    color: '#156e9a'
  },
});
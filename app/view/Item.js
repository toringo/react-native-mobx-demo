import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Navigator,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert
} from 'react-native'
// import Round from './Round'

export default class Book extends Component {
  constructor(props) {
    super(props)
  }
  static defaultProps = {
    data: {
      grade: 9.3,
      title: '设计心理学4:未来设计',
      num: 5,
      author: '唐纳德诺曼',
      publish: '中信出版社',
      time: 2015,
      picture:
        'https://imgsa.baidu.com/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=b52bcf617f094b36cf9f13bfc2a517bc/9c16fdfaaf51f3de300988da9deef01f3b2979d0.jpg'
    }
  }
  onPress() {
    let params = {
        data: this.props.data,
        user: this.props.user,
        timestamp: this.props.timestamp
    }
    console.log('params', params);
    // Actions[SCENE_BOOK_INFO](params)
  }
  render() {
    console.log('item', this.props.data);
    const { author, grade, num, picture, publish, time, title } = this.props.data;
    return (
      <TouchableOpacity
        onPress={()=>Alert.alert('标题','我是massage')}
      >
        <View style={[styles.item, this.props.style]}>
          <Image
            style={styles.image}
            source={{ uri: picture }}
          />
          <View style={styles.information}>
            <Text style={styles.item_title}>{title}</Text>
            <Text style={styles.item_author}>
              {author}
            </Text>
            <Text style={styles.item_publish}>
              {publish} {time}
            </Text>
            <Text style={styles.item_grade}>
              {grade !== 0
                ? grade + ' 分'
                : '暂无评分'}
            </Text>
          </View>
          <View style={styles.round}>
            <Text style={styles.item_num}>{num}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    height: 112,
    width: 74,
    marginTop: 20
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(230,230,234)',
    paddingHorizontal: 12,
    backgroundColor: 'white',
    width: Dimensions.get("window").width,
    height: 160,
    borderRadius: 8,
    marginTop: 8,
    flexDirection: 'row'
  },
  information: {
    marginLeft: 16,
    marginTop: 16
  },
  item_title: {
    fontSize: 17,
    color: '#494949',
    fontFamily: 'PingFang SC',
    fontWeight: '500'
  },
  item_author: {
    fontSize: 14,
    color: '#666666',
    fontFamily: 'PingFang SC',
    marginVertical: 8
  },
  item_publish: {
    fontSize: 14,
    color: '#666666',
    fontFamily: 'PingFang SC'
  },
  item_grade: {
    fontFamily: 'PingFang SC',
    fontWeight: '500',
    color: '#FFB173',
    fontSize: 17,
    marginTop: 14,
    flexDirection: 'row'
  },
  item_num: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    width: 36,
    // borderRadius: 18,
    lineHeight: 36,
    // backgroundColor: '#eee',
    textAlign: 'center',
  },  
  round: {
    position: 'absolute',
    top: 62,
    right: 12,
    borderRadius: 18,
    backgroundColor: '#eee',
  }
})

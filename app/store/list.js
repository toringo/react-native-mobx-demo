import {observable} from 'mobx'

let index = 0

class ListStore {
  @observable list = []

  addListItem = (item) => {
    this.list.push({
      name: item, 
      items: [],
      index
    })
    index++
  }

  removeListItem = (item) => {
    this.list = this.list.filter((l) => {
      return l.index !== item.index
    })
  }
  addItem = (item, name) => {
    this.list.forEach((l) => {
      if (l.index === item.index) {
        l.items.push(name)
      }
    })
  }
}

export default new ListStore()
import { observable } from 'mobx';

class HostUser {

  @observable user = {}
  @observable stores = {
    num: 0,
  }
  constructor() {
    this.getHost()
    const storer = observable({
      num: 0
    });
  }
  
  add = () => {
    console.log('add', this.stores.num);
    this.stores.num++;
  }

  minus = () => {
      this.stores.num --;
  }
  getHost = ()=> {
    this.user = {
      name: 'tori',
      username: 'Toringo'
    };
  }
}

export default new HostUser()
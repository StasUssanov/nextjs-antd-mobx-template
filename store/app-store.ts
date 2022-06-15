import { makeAutoObservable } from 'mobx';

class AppStore {
  count: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  testMobx() {
    console.log('deb testMobx', ++this.count);
  }
}

export const appStore = new AppStore();

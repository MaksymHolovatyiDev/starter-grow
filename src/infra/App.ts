import 'dotenv/config';

import { Tcp } from './Tcp';
import { IServes } from 'types/serves';

export class App implements IServes {
  private static instance: App;

  private tcp: IServes = new Tcp();

  constructor() {
    if (!App.instance) {
      App.instance = this;
    }
    return App.instance;
  }

  async init() {
    const { tcp } = this;

    console.log('Started');

    await tcp.init();

    return true;
  }
}

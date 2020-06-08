import Enmap from 'enmap';

class Settings extends Enmap<string, Config> {

  defaults: Config = {
    prefix: ';',
    authToken: '',
    playerToken: 0,
    ip: '',
    port: 0,
  };

  init() {
    this.defer.then(() => {
      console.log(`[settings] enmap loaded: ${settings.count} keys`);
    });
  }

  ensure(key: string) {
    return super.ensure(key, this.defaults);
  }

}

export interface Config {
  prefix: string,
  authToken: string,
  playerToken: number,
  ip: string,
  port: number,
}

const settings = new Settings({
  name: 'settings',
  fetchAll: false,
  autoFetch: true,
  cloneLevel: 'deep',
});

export default settings;

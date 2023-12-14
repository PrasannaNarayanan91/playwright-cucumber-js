let config = require('config');

class AppConfig {
  constructor() {
    this.baseURL = config.get('baseUrl');
    this.pageTimeOut = config.get('playwrightPageDefaultTimeout');
    this.waitTime = config.get('cucumberTimeout');
    this.headless = process.env.HEADLESS === 'false'
    this.devtools = process.env.DEV_TOOLS === 'true'
    this.env = process.env.NODE_ENV
  }
}

module.exports = new AppConfig();
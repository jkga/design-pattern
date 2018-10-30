/**
 * Windows
 */
class windows {
  constructor () {
    this.welcomeMessage = 'Welcome to windows (Business essential)'
  }

  getMessage () {
    return this.welcomeMessage
  }
}


/**
 * Linux
 */
class linux {
  constructor () {
    this.welcomeMessage =  'Welcome to Linux (Make it nerd, Make it FOSS!)'
  }

  getMessage () {
    return this.welcomeMessage
  }
}


/**
 * Android
 */
class android {
  constructor () {
    this.welcomeMessage =  'Welcome to Android (Make it mobile!)'
  }

  getMessage () {
    return this.welcomeMessage
  }
}


/**
 * Apple
 */
class apple {
  constructor () {
    this.welcomeMessage =  'Welcome to MacOS (Think different, Quality, I-x)'
  }

  getMessage () {
    return this.welcomeMessage
  }
}

/**
 * Handle selection for different device setup
 */
class Facade {
  constructor (device) {
    this.device = device
    this.windows = new windows()
    this.linux = new linux()
    this.android = new android()
    this.apple = new apple()

  }

  /**
   * Select OS to Boot
   */
  bootOS () {
    switch (this.device) {
      case 'pc' :
        return this.windows.getMessage()
        break;

      case 'mac' :
        return this.apple.getMessage()
        break;

      case 'cellphone' :
        return this.android.getMessage()
        break;

      case 'server' :
        return this.linux.getMessage()
        break;
    }
  }
}

// device instance
const dev = new Facade('server')
console.log(dev.bootOS())


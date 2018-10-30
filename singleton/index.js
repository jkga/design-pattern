class Singleton {
  constructor () {
    // only createan instance and properties once
    // this will ensure that we will only have one instance of this class across our application
    if(!Singleton.instance) this.init() | (Singleton.instance = this)
    return Singleton.instance 
  }
  
  init () {
    this.name = 'John'
  }

  getName () {
    return this.name
  }

  setName (name) {
    return this.name = name
  }
}


// Create sample objects
const a = new Singleton()
const b = new Singleton()

// set the name of first object
a.setName('Doe')

// OUTPUT
console.log(`First instance : ${a.getName()}`)
// must be the same with variable 'a' since it is referenced to the same class
console.log(`Second instance : ${b.getName()}`)
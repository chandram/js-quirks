/**
  Mediator Pattern or Publish/Subscribe Pattern or Observer Pattern
  Acts as Mediator between 2 different modules.
**/

export default function PubSub() {
  function PubSub() {
    this._states = {}
  }

  PubSub.prototype.subscribe = function (state, fn) {
    if (!this._states[state]) this._states[state] = [];
    this._states[state].push(
      {context: this, callback: fn}
    );
    return this;
  }

  PubSub.prototype.publish = function (state) {
    if (!this._states[state]) return false;
    // get all arguments passed "except" the state name.
    let args = Array.prototype.slice.call(arguments, 1);
    // Call --> comma and Apply --> Array.

    for (let i = 0; i < this._states[state].length; i++) {
      let subscription = this._states[state][i];
      subscription.callback.apply(subscription.context, args)
    }
  }
}

var PubSubInstance = new PubSub();
PubSubInstance.name = "John";

// create 2 modules & Inject the PubSub instance
var module1 = (function (obj) {
  this.name = "Chandra";
  obj.subscribe("NameChangeEvent", function (args) {
    // "this" refers to obj
    console.log("Module 1 ", this.name, args)
    // this.name = args;
  });
}(PubSubInstance)); //Inject PubSub instance to module1

var module2 = (function (obj) {
  obj.publish("NameChangeEvent", "Doe");
}(PubSubInstance)); //Inject PubSub instance to module2

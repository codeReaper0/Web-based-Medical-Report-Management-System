const EventEmmiter = require("events");

var url = "https://mylogger.io/log";

class Logger extends EventEmmiter {
  log(message) {
    console.log(message);

    this.emit("messageLogged", {id: 1, url: "http://"});
  }
}

module.exports = Logger;

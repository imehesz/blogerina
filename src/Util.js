/**
 * Util.js
 * 
 * Utility functions for all shenanigans 
 */
class Util {
    static sayHi() {
        console.log(Util.saySomething("hi"))
    }

    static saySomething(something) {
        console.log(something)
    }
}

module.exports = Util;
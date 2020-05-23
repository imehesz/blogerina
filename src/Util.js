/**
 * Util.js
 * 
 * Utility functions for all shenanigans 
 */
import SU from "./StringUtil"

class Util {
    static sayHi() {
        console.log(Util.saySomething("hi"))
    }

    static saySomething(something) {
        console.log(something)
    }

}

Util.StringUtil = SU

module.exports = Util;
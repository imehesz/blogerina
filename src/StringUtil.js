/**
 * StringUtil.js
 * 
 * String Utility functions yay
 */

class StringUtil {
    /**
     * Helper for generating plain text from markdown based on
     * https://dustinpfister.github.io/2017/11/19/nodejs-marked/
     * 
     * @param {String} text 
     * @return {String} Escaped text
     */
    static htmlEscapeToText(text) {
        return text.replace(/\&\#[0-9]*;|&amp;/g, function (escapeCode) {
 
            if (escapeCode.match(/amp/)) {
                return '&';
            }
            return String.fromCharCode(escapeCode.match(/[0-9]+/));
        });
    }

    /**
     * Helper for generating plain text from markdown based on
     * https://dustinpfister.github.io/2017/11/19/nodejs-marked/
     * @return {String} Plain text
     */
    static plainTextRenderer() {
        var render = new marked.Renderer();
 
        // render just the text of a link
        render.link = function (href, title, text) {
            return text;    
        };
     
        // render just the text of a paragraph
        render.paragraph = function (text) {
            return htmlEscapeToText(text)+'\r\n';
        };
     
        // render just the text of a heading element, but indecate level
        render.heading = function (text, level) {
            return level + ' ) ' + text;
        };
     
        // render nothing for images
        render.image = function (href, title, text) {
            return '';
        };

        return render;
    }
}

module.exports = StringUtil
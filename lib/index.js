var getCSSflipProcessor = require("./css-flip-processor.js"),
    usage = require("./usage"),
    parseOptions = require("./parse-options");

function LessPluginCSSflip(options) {
    this.options = options;
};

LessPluginCSSflip.prototype = {
    install: function(less, pluginManager) {
        var CSSflipProcessor = getCSSflipProcessor(less);
        pluginManager.addPostProcessor(new CSSflipProcessor(this.options));
    },
    printUsage: function () {
        usage.printUsage();
    },
    setOptions: function(options) {
        this.options = parseOptions(options);
    },
    minVersion: [2, 1, 1]
};

module.exports = LessPluginCSSflip;

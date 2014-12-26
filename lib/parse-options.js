module.exports = function(options) {
    if (typeof options === 'string') {
        var cleanOptionArgs = options.split(" ");
        options = {};
        for(var i = 0; i < cleanOptionArgs.length; i++) {
            var argSplit = cleanOptionArgs[i].split("="),
                argName = argSplit[0].replace(/^-+/,"");
            switch(argName) {                 
                default:
                    throw new Error("unrecognised css-flip option '" + argSplit[0] + "'");
            }
        }
    }
    return options;
};

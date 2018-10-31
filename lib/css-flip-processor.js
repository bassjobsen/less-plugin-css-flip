var flip = require('css-flip'),
    rework = require('rework'),
    usage = require("./usage"),
    fs = require('fs');
module.exports = function(less) {
    function CSSFlipProcessor(options) {
        this.options = options || {};
    };

    CSSFlipProcessor.prototype = {
        process: function(css, extra) {
            var options = this.options;

            var sourcemap = false,
                isInline = false,
                source = {};
            if (extra.sourceMap) {
                sourcemap = true;
                isInline = extra.sourceMap.isInline();
                source = {
                    'source': extra.sourceMap.sourceMapInputFilename
                };

                if (!isInline) {
                    var filename = extra.sourceMap.options.sourceMapFullFilename;
                    fs.writeFileSync(filename, extra.sourceMap.sourceMap, 'utf8');
                }
            }
            var result = rework(css, source).use(flip.rework()).toString({
                sourcemap: sourcemap,
                sourcemapAsObject: !isInline
            });

            if (extra.sourceMap && !isInline) {
                if (extra.sourceMap.options.outputSourceFiles === undefined) {
                    delete result.map.sourcesContent;
                    result.map.file = extra.sourceMap.options.sourceMapOutputFilename;
                }
                extra.sourceMap.setExternalSourceMap(JSON.stringify(result.map));
                return result.code;
            }

            return result;
        }
    };

    return CSSFlipProcessor;
};
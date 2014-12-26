less-plugin-css-flip
=====================

Generate left-to-right (LTR) or right-to-left (RTL) CSS from Less using css-flip.

## lessc usage

```
npm install -g less-plugin-css-flip
```

and then on the command line,

```
lessc file.less --css-flip
```

See [css-flip](https://github.com/twitter/css-flip) for the available command options.

## Programmatic usage

```
var LessPlugincss-flip = require('less-plugin-css-flip'),
    css-flipPlugin = new LessPlugincss-flip();
less.render(lessString, { plugins: [css-flipPlugin] })
  .then(
```

## Browser usage

Browser usage is not supported at this time.

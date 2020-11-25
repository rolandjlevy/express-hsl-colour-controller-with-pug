# HSL colour controller 🎨

A dynamic HSL colour controller

- Made with [express.js](https://expressjs.com) and [pug](https://pugjs.org) - a template engine for Node
- HSL values are controlled by the range inputs which update the CSS variables, which in turn display the colour and values in real time
- The `colours` object, in `views/index.pug` is used to render the range inputs
```js
colours = { 
  h: { prop:'h', name: 'Hue', max: 360 }, 
  s: { prop:'s', name: 'Saturation', max: 100 }, 
  l: { prop:'l', name: 'Lightness', max: 100 }};
}
```

---

### Links 🔗
- [Live demo](https://express-hsl-colour-controller-with-pug.rolandjlevy.repl.co/)
- [Source code](https://repl.it/@RolandJLevy/express-hsl-colour-controller-with-pug)
- [Github repo](https://github.com/rolandjlevy/express-hsl-colour-controller-with-pug)

---

### Further reading on HSL
- A great [css-tricks.com](https://css-tricks.com) article: 
[HSL() / HSLa() is great for programmatic color control](https://css-tricks.com/hsl-hsla-is-great-for-programmatic-color-control)
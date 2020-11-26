# HSL colour controller 🎨

A dynamic HSL colour controller

- Made with [express.js](https://expressjs.com) and [pug](https://pugjs.org) - a template engine for Node
- Fully responsive and mobile friendly
- Using the [W3Color JavaScript Library](https://www.w3schools.com/lib/w3color.js) to convert colour values to hsl, rgb and hex
- HSL values are controlled by the range inputs which update the CSS variables, which in turn display the colour and values in real time
- The `colours` object, in `views/index.pug` is used to render the range inputs
```js
colours = { 
  h: { prop:'h', name: 'Hue', max: 360 }, 
  s: { prop:'s', name: 'Saturation', max: 100 }, 
  l: { prop:'l', name: 'Lightness', max: 100 }};
}
```

Here is how to iterate through the object to render each input. Notice the indentation which is necessary for pug to work:

```js
each key in Object.keys(colours)
  div.v-center
    h3.m-5 #{colours[key].name}
    input(
      type='range'
      class='slider'
      name=`--${colours[key].prop}`
      value=`${colours[key].max / 2}`
      max=`${colours[key].max}`
      min="0" 
    )
    label #{colours[key].max / 2}
```
---

### Links 🔗
- [Live demo](https://express-hsl-colour-controller-with-pug.rolandjlevy.repl.co/)
- [Source code](https://repl.it/@RolandJLevy/express-hsl-colour-controller-with-pug)
- [Github repo](https://github.com/rolandjlevy/express-hsl-colour-controller-with-pug)

---

### Further reading
- A great article from css-tricks.com: 
[HSL() / HSLa() is great for programmatic color control](https://css-tricks.com/hsl-hsla-is-great-for-programmatic-color-control)
- A useful [colours tutorial](https://www.w3schools.com/colors/default.asp) from w3schools.com
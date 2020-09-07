const tc = require("tinycolor2");

const lightRate = 3;
const darkRate = 9;

// Color Palette
const _lightBlue = "7BDFF2";
const _lightGreen = "B2F7EF";
const _lightCreamPink = "EFF7F6";
const _Pink = "F7D6E0";
const _PinkShade = "F2B5D4";

// https://coolors.co/d3f8e2-e4c1f9-f694c1-ede7b1-a9def9
// Update for more color palette

module.exports = {
  lightBlue: {
    main: _lightBlue,
    light: tc(_lightBlue).lighten(lightRate).toHex(),
    dark: tc(_lightBlue).darken(darkRate).toHex(),
  },
  lightGreen: {
    main: _lightGreen,
    light: tc(_lightGreen).lighten(lightRate).toHex(),
    dark: tc(_lightGreen).darken(darkRate).toHex(),
  },
  lightCreamPink: {
    main: _lightCreamPink,
    light: tc(_lightCreamPink).lighten(lightRate).toHex(),
    dark: tc(_lightCreamPink).darken(darkRate).toHex(),
  },
  Pink: {
    main: _Pink,
    light: tc(_Pink).lighten(lightRate).toHex(),
    dark: tc(_Pink).darken(darkRate).toHex(),
  },
  PinkShade: {
    main: _PinkShade,
    light: tc(_PinkShade).lighten(lightRate).toHex(),
    dark: tc(_PinkShade).darken(darkRate).toHex(),
  },
};

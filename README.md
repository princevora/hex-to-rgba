# hex-to-rgba
A npm package to convert a hex code to rgba


## Installation
```
npm i palette-to-rgba
```
## Usage 
```js
// Import the object
import palette from "palette-to-rgba";

// Call the function
palette.hexToRgba('FFF');

// output: 
// 'rgba(255, 255, 255, 1)'
```
## Test
```
Color Utils
    hexToRgba()
      ✔ should convert #FFFFFF to rgba(255, 255, 255, 1)
      ✔ should handle shorthand hex codes like #FFF
      ✔ should handle hex codes without hash like "FFF"
Invalid hex color format.
      ✔ should return black for invalid hex codes
      ✔ should handle alpha values correctly
      ✔ should default to alpha 1 if not specified
      ✔ should process lowercase hex codes correctly
Invalid hex color format.
      ✔ should return black for empty strings
      ✔ should handle whitespace in input


  9 passing (44ms)
```

## Enumerify

An enum type for JavaScript whose API simply exposes two types of enums: a string enum or a numeric enum

#### Usage

`npm install --save-dev enumerify`

You can create two types of enums:

**Numeric Enums**:

```javascript
const Enumerify = require("enumerify");

... 

const numericEnum = new Enumerify({isStringEnum: false}, ["Up", "Down", "Left", "Right"]);
numericEnum.Up
// => 0
```

**String Enums**:

String enums values must be manually set for each member, and can be anything you want.

```javascript
const Enumerify = require("enumerify");

...

const stringEnum = new Enumerify({isStringEnum: true}, {Up: "1", Down: "2", Left: "3", Right: "4"});
stringEnum.Up
// => "1"
```

#### Notes

There are many ways to create enums in JavaScript, but for the most part you have to fake it and you will not get type safety :)



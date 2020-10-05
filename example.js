const Enumerify = require("./");

const stringEnum = new Enumerify({isStringEnum: true}, {Up: "1", Down: "2", Left: "3", Right: "4"});

const numericEnum = new Enumerify({isStringEnum: false}, ["Up", "Down", "Left", "Right"]);


console.log(
    "String Enum", stringEnum,
    // '\n',
    "Numeric Enum", numericEnum
);

console.log(stringEnum.Up); // string 1

console.log(numericEnum.Up); // number 0

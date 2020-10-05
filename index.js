/**
 * Created by ahadb on 09/01/2020.
 */

/**
 * @module enumerify
 * @description A simple enumerated type for JavaScript :/
 *
 * @author Ahad Bokhari <ahadbokhari@gmail.com>
 */

/**
 * Main Function representing an emumerated type
 *
 * @param: obj - Object
 * @param: options - Object
 *
 * @returns: Object
 */

module.exports = function Enumerify(options, enumDeclaration) {

  var list;

  // adds inverted key-value pairs to the object
  if (options.isStringEnum) {
    for (var key in enumDeclaration) {
      enumDeclaration[enumDeclaration[key] = enumDeclaration[key]] = key;
    }
  } else {
    for (var i in enumDeclaration) {
      for (var k in arguments[1]) {
        list = this[arguments[1][k]] = parseInt(k)
      }
      return list;
    }
  }

  if (Object.freeze) {
    return deepFreeze(enumDeclaration);
  }
};

/**
 * Helper function to make an object immutable
 *
 * @param: obj - Object
 *
 * @returns: Object
 */

function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);

  for (const name of propNames) {
    const value = object[name];

    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}

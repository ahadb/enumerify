const Enumerify = require("./");

test('returns a string enum for arrow directions', () => {
  const result = new Enumerify(
      {isStringEnum: true},
      {Up: "1", Down: "2", Left: "3", Right: "4"}
  );

  // adds inverted key-value pairs to the object
  expect(result).toEqual({
    '1': 'Up',
    '2': 'Down',
    '3': 'Left',
    '4': 'Right',
    Up: '1',
    Down: '2',
    Left: '3',
    Right: '4'
  });
});

test('values of string enum are a string', () => {

  const result = new Enumerify(
      {isStringEnum: true},
      {Up: "1", Down: "2", Left: "3", Right: "4"}
  );

  expect(result.Up).toEqual("1");
  expect(result.Down).toEqual("2");
  expect(result.Left).toEqual("3");
  expect(result.Right).toEqual("4");
  expect(result.Up).not.toEqual(1);

  expect(typeof result.Up).toBe("string");
  expect(typeof result.Down).toBe("string");
  expect(typeof result.Left).toBe("string");
  expect(typeof result.Right).toBe("string");
});

test('returns a numeric enum for arrow directions', () => {
  const result = new Enumerify(
      {isStringEnum: false},
      ["Up", "Down", "Left", "Right"]
  );

  expect(result).toEqual({ Up: 0, Down: 1, Left: 2, Right: 3 })
});

test('values of numeric enum are numbers', () => {
  const result = new Enumerify(
      {isStringEnum: false},
      ["Up", "Down", "Left", "Right"]
  );

  expect(result.Up).toEqual(0);
  expect(result.Down).toEqual(1);
  expect(result.Left).toEqual(2);
  expect(result.Right).toEqual(3);
  expect(result.Up).not.toEqual("0")
});

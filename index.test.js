const { greet } = require('./index');

test('greets a user by name', () => {
  expect(greet('Jaisika')).toBe('Hello, Jaisika!');
});

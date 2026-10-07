function add(a, b) {
  return a + b;
}

test("2 + 3 should equal 5", () => {
  expect(add(2, 3)).toBe(5);
});

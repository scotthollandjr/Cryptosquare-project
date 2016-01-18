describe('convertIt', function() {
  it("puts string to all lower case", function() {
    expect(convertIt("HELLO")).to.equal("hello");
  });

  it("removes symbols from string", function() {
    expect(convertIt("Hello!")).to.equal("hello");
  });

  it("removes numbers from string", function() {
    expect(convertIt("h3ll0")).to.equal("hll");
  });

  it("removes spaces from string", function() {
    expect(convertIt("Hello there")).to.equal("hellothere");
  });
});

// string with capital letters || HeLlO || hello
// string with symbols || Hello! || hello
// string with numbers || h3ll0 || hll


// puts all text to lower case
// removes any spaces in the text
// removes punctuation (dash, period, comma)
// count the amount of characters
// if choose perfect square (4, 9, 16, 25, 36..)
// if no choose closest perfect square that is bigger
// output code block

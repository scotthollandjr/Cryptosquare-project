describe('convertIt', function() {
  it("puts string to all lower case", function() {
    expect(convertIt("HELLO")).to.equal("hello");
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

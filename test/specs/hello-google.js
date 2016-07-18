var assert = require('chai').assert;

describe('Assert stuff', function() {
  
  it('Should assert that 2 is 2', function() {
    assert.equal(2,2);
  });

  it('Should assert the title of Google', function() {
    browser
      .url('http://www.google.com')
      .getTitle(function(err, title) {
        assert.equal(title, 'Google');
      });
  });

});

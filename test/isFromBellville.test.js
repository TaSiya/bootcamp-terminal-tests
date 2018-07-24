let assert = require('assert');

const check = require('../isFromBellville');

describe('Is from Bellville function', function(){
	it('should return true in registration number CY 123', function(){
		assert.equal(check('CY 123'), true);
	});
});

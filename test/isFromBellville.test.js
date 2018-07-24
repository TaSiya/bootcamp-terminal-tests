let assert = require('assert');

const check = require('../isFromBellville');

describe('Is from Bellville function', function(){
	it('should return true in registration number CY 123', function(){
		assert.equal(check('CY 123'), true);
	});

	it('should return false in CA 235', function(){
		assert.equal(check('CA 235'),false);
	});
	
	it('should return true CY 6855', function(){
		assert.equal(check('CY 6855'), true);
	});
});

let assert = require('assert');

const check = require('../regCheck');

describe('reg check function', function(){
	it('should return true if the 940 33 GP with location \'GP\'', function(){
		assert.equal(check('940 33 GP','GP'),true);
	});

	it('should return false in CA 73-33 location \'CA\'',function(){
		assert.equal(check('CA 73-33','CA'), false);
	});

	it('Should return true in 742 904 MP location \'MP\'',function(){
		assert.equal(check('742 904 MP','MP'),true);
	});
});

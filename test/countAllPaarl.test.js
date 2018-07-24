let assert = require('assert');

const paarl = require('../countAllPaarl');

describe('count all paarl Function',function(){
	it('should return 2 given \'CJ 646, CA 747, CJ 843, CY 333\'',function(){
		assert.equal(paarl('CJ 646, CA 747, CJ 843, CY 333'),2);
	});

	it('should return 0 given \'CA 331, CY 820, CK 523\'',function(){
		assert.equal(paarl('CA 331, CY 820, CK 523'),0);
	});

	it('should return 4 given \'CJ 636, CJ 000, CJ 623, CA 734, CL 098, CJ 7776\'',function(){
		assert.equal(paarl('CJ 636, CJ 000, CJ 623, CA 734, CL 098, CJ 7776'),4);
	});
});

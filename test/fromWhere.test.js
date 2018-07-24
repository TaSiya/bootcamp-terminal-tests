let assert = require('assert');

const where = require('../fromWhere');

describe('From where function',function(){
	it('should return \'Bellville\' if given \'CY\'',function(){
		assert.equal(where('CY'),'Bellville');
	});

	it('should return \'Cape Town\' if given \'CA\'',function(){
		assert.equal(where('CA'), 'Cape Town');
	});


	it('should return \'Some other place\' if given any plate other than \'CA,CY,CJ\'',function(){
		assert.equal(where('CZ'),'Some other place!');
	});
});

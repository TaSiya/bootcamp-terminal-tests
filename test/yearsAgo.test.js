let assert = require('assert');

const yearsAgo = require('../yearsAgo');

describe('yearsAgo Function',function(){
	it('should return 8 years given 2010',function(){
		assert.equal(yearsAgo(2010),8);
	});

	it('should return 18 years given 2000',function(){
		assert.equal(yearsAgo(2000), 18);
	});

	it('should return 24 years given 1994',function(){
		assert.equal(yearsAgo(1994),24);
	});
});

let assert = require('assert');

const fee = require('../transportFee');

describe('transport fee function',function(){
	it('Should return R20 if given \'morning\'',function(){
		assert.equal(fee('morning'), 'R20');
	});

	it('Should return R10 if given \'afternoon\'',function(){
		assert.equal(fee('afternoon'), 'R10');
	});

	it('should return free is choosen night',function(){
		assert.equal(fee('night'), 'free');
	});
});

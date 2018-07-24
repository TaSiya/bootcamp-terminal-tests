let assert = require('assert');

const bill = require('../totalPhoneBill');

describe('total phone bill function',function(){
	it('should return R8,25 given \'call, call, call\'',function(){
		assert.equal(bill('call, call, call'), 'R8.25');
	});

	it('should return R4,70 given \'call, sms, sms, sms\'',function(){
		assert.equal(bill('call, sms, sms, sms'),'R4.70');
	});
});

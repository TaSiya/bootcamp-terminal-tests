let assert = require('assert');

const count = require('../countRegNumber');

describe('count reg number function',function(){
	it('should return 3 given \'CA 126, CY 982, CJ 822\'',function(){
		let list = 'CA 126,CY 982,CJ 822';
		assert.equal(count(list),3);
	});

	it('should return 1 given \'CK 894\'',function(){
		assert.equal(count('CK 894'),1);
	});
});

let assert = require('assert');

const town = require('../countAllFromTown');

describe('count all from Town function',function(){
	it('should return 3 given \'CA 333, CJ 332, CA 667, CA 992, CY 097\' destination \'CA\'',function(){
		assert.equal(town('CA 333, CJ 332, CA 667, CA 992, CY 097', 'CA'),3);
	});

	it('should return 3 given \'CA 333, CJ 332, CA 667, CA 992, CY 097, CJ 532\' destination \'CJ\'',function(){
		assert.equal(town('CA 333, CJ 332, CA 667, CA 992, CY 097, CJ 532', 'CJ'),2);
	});

	it('should return 0 given \'CA 333, CJ 332, CA 667, CA 992, CY 097, CJ 532\' destination \'CK\'',function(){
                assert.equal(town('CA 333, CJ 332, CA 667, CA 992, CY 097, CJ 532', 'CK'),0);
        });

});

let assert = require('assert');

const week = require('../isWeekDay');

describe('is week day function',function(){
	it('should return true if day is Thursday',function(){
		assert.equal(week('Thursday'),true);
	});

	it('should return false if day is Sunday',function(){
		assert.equal(week('Sunday'), false);
	});

	it('should return true if day is Monday',function(){
		assert.equal(week('Monday'), true);
	});
});

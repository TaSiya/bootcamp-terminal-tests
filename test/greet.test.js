let assert = require('assert');
let greeting = require('../greet');

describe('the greet function', function(){
	it('should greet Siyanda', function(){
		assert.equal('Hello, Siyanda', greeting('Siyanda'));
	});

	it('Should greet Pam', function(){
		assert.equal('Hello, Odwa', greeting('Pam'));
	});

});

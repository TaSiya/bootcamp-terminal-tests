let assert = require('assert');

const over20 = require('../findItemsOver20');

describe('find items over 20 function',function(){
	it('should only return [{name : apple, qty : 31}] if given [{name : apple, qty : 31},{name : orange, qty : 12}] ',function(){
		let list = [
				{name : 'apple', qty : 31},
				{name : 'orange', qty : 12}
					];
		assert.deepEqual(over20(list),[{name : 'apple', qty : 31}]);
	});

	it('should return [{name : banana, qty :25},{name : apple, qty : 21},{name : mango, qty : 40}] if given [{name : banana, qty :25},{name : pears, qty : 19},{name : apple, qty : 21},{name : orange, qty : 8},{name : strawberry, qty : 14},{name : mango, qty : 40}] ',function(){
		let list = [
				{name : 'banana', qty :25},
				{name : 'pears', qty : 19},
				{name : 'apple', qty : 21},
				{name : 'orange', qty : 8},
				{name : 'strawberry', qty : 14},
				{name : 'mango', qty : 40}
			];
		assert.deepEqual(over20(list),[
						{name : 'banana', qty :25},
						{name : 'apple', qty : 21},
						{name : 'mango', qty : 40}
					]);
	});

	it('should return [] if given [{name : orange , qty : 20},{name : mango, qty : 13},{name : strawberry, qty : 10}]',function(){
		let list = [
				{name : 'orange' , qty : 20},
				{name : 'mango', qty : 13},
				{name : 'strawberry', qty : 10}];
		assert.deepEqual(over20(list), []);
	});
});

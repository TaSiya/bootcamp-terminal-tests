
let assert = require('assert')
const most = require('../mostProfitableDepartment');

describe('Most Profitable Department', function(){

   let salesDate =[
      		{department : 'hardware', sales : 4500},
      		{department : 'outdoor', sales : 1500},
      		{department : 'outdoor', sales : 500},
      		{department : 'electronics', sales : 5500},
      		{department : 'hardware', sales : 3500},
      		{department : 'outdoor', sales : 2000},
      		{department : 'hardware', sales : 4500},
   	];

   	let salesDate2 =[
      		{department : 'outdoor', sales : 1500},
      		{department : 'outdoor', sales : 500},
      		{department : 'electronics', sales : 10000},
      		{department : 'hardware', sales : 3500},
      		{department : 'outdoor', sales : 2000},
   	];

   	it('checks profitable department', function(){
      		assert.deepEqual(most(salesDate),'hardware')
   	});

   	it('checks profitable department', function(){
      		assert.deepEqual(most(salesDate2),'electronics')
   	});

});

let assert = require('assert');

const over = require('../findItemsOver');

describe('find items over function',function(){
        it('should only return [] if given [{name : apple, qty : 31},{name : orange, qty : 12}] with threshold 40',function(){
                let list = [
                                {name : 'apple', qty : 31},
                                {name : 'orange', qty : 12}
                                        ];
                assert.deepEqual(over(list,40),[]);
        });

       it('should return [{name : banana, qty :25},{name: pears, qty : 19},{name : apple, qty : 21},{name : mango, qty : 40}] if given [{name : banana, qty :25},{name : pears, qty : 19},{name : apple, qty : 21},{name : orange, qty : 8},{name : strawberry, qty : 14},{name : mango, qty : 40}] with threshold 15',function(){

                let list = [
                                {name : 'banana', qty :25},
                                {name : 'pears', qty : 19},
                                {name : 'apple', qty : 21},
                                {name : 'orange', qty : 8},
                                {name : 'strawberry', qty : 14},
                                {name : 'mango', qty : 40}
                        ];
                assert.deepEqual(over(list,15),[
                                                {name : 'banana', qty :25},
						{name : 'pears', qty : 19},
                                                {name : 'apple', qty : 21},
                                                {name : 'mango', qty : 40}
                                        ]);
        });

        it('should return [] if given [{name : orange , qty : 20},{name : mango, qty : 13},{name : strawberry, qty : 10}] with the threshold 30',function(){
                let list = [
                                {name : 'orange' , qty : 20},
                                {name : 'mango', qty : 13},
                                {name : 'strawberry', qty : 10}];
                assert.deepEqual(over(list,30), []);
        });
});


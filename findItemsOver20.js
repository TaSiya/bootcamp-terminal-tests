module.exports = function(){
	var result = [];
  	for(var i = 0 ; i < products.length; i++){
   	 	if(products[i].qty > 20){
         	result.push(products[i]); 
        	}
  	}
  	return result;
}

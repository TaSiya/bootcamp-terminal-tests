module.exports = function(products, threshold){
	var result = [];
  	for(var i = 0 ; i < products.length; i++){
     		if(products[i].qty > threshold){
         		result.push(products[i]);
        	}
    	}
  	return result;
}

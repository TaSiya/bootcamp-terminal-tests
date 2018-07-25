module.exports = function(products){
	
  	var currentHigh = 0;
  	var highest = [0, 0, 0, 0, 0, 0];
  
  	for(var i = 0 ; i < products.length; i++){
     	switch (products[i].department){
        	
          case 'hardware':
            highest[0] = highest[0] + products[i].sales ;
           	break;
            
          case 'outdoor':
            highest[1] = highest[1] + products[i].sales;
            break;
            
          case 'carpentry':
            highest[2] = highest[2] + products[i].sales;
            break;
            
          case 'electronics':
            highest[3] = highest[3] + products[i].sales;
            break;
        }
      
    }
  	
    for ( var i = 0 ; i < highest.length ; i++){
		if(currentHigh < highest[i]){ currentHigh = highest[i];}
    }
  
  	if(currentHigh == highest[0]){ return 'hardware';}
  	else if(currentHigh == highest[1]){ return 'outdoor';}
  	else if(currentHigh == highest[2]){ return 'carpentry';}
 	else if(currentHigh == highest[3]){ return 'electronics';}
}

function mostProfitableDay(products){
  
 	var profit = [0,0,0,0,0,0,0];
  	var highest = 0 ;
  
  	for(var i = 0 ; i < products.length ; i++){
   		switch(products[i].day){
          	case 'Monday':
            	profit[0] = profit[0] + products[i].sales;
            	break;
            
            case 'Tuesday':
            	profit[1] = profit[1] + products[i].sales;
            	break;
            
            case 'Wednesday':
            	profit[2] = profit[2] + products[i].sales;
            	break;
            
            case 'Thursday':
            	profit[3] = profit[3] + products[i].sales;
            	break;
            
            case 'Friday':
            	profit[4] = profit[4] + products[i].sales;
            	break;
            
            case 'Saturday':
            	profit[5] = profit[5] + products[i].sales;
            	break;
            
            case 'Sunday':
            	profit[6] = profit[6] + products[i].sales;
            	break;
            
          	default:
            	break;
        }
      
  	}
  
  	for(var i = 0; i < profit.length ; i++){ 
      if(highest < profit[i]){ highest = profit[i];}
    }
  
  	switch(highest){
      case profit[0]:
        return 'Monday';
        
      case profit[1]:
      return 'Tuesday';
        
      case profit[2]:
      return 'Wednesday';
        
      case profit[3]:
      return 'Thursday';
        
      case profit[4]:
      return 'Friday';
        
      case profit[5]:
      return 'Saturday';
        
      case profit[6]:
      return 'Sunday';
        
      default:
        return '';
    }
}

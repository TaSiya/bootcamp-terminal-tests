module.exports = function(bills){
	var billList = bills.split(', ');
	var totalCost = 0;
  
  	for (var i = 0 ; i < billList.length; i++){
     	if (billList[i].startsWith("c")){
            	totalCost = totalCost + 2.75
        }
        else if(billList[i].startsWith("s")){
          		totalCost = totalCost + 0.65 ;
        }
      	else{ console.log("Incorrect input :(");}
    }
  return "R"+totalCost.toFixed(2);
}

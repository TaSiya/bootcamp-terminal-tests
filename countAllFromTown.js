module.exports = function(reg, dest){
	var regList = reg.split(', ');
	var found = 0 ;
	var i = 0 ;
	for(i ; i < regList.length ; i++){
		if(regList[i].startsWith(dest)){
			found ++;
		}
	}
	return found;
}

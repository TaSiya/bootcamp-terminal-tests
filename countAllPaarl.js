module.exports = function(reg){
	var regList = reg.split(', ');
	var found = 0 ;
	var i = 0 ;
	for(i ; i < regList.length; i++){
		if(regList[i].startsWith('CJ')){
			found ++;
		}
	}
	return found;
}

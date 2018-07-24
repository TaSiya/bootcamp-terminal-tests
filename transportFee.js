module.exports = function(shift){
	switch(shift){
		case 'morning':
			return 'R20';
		case 'afternoon':
			return 'R10';
		default:
			return 'free';
	}
}

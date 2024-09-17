let formator = {
	capitalizeWords: function(str){
		return str
			.split(' ')
			.map((sub)=>{
				return sub[0].toUpperCase() + sub.slice(1)
			})
			.join(' ')
	},
	abbreviateNumber: function(number, capitalize = false){
		let num = Math.floor(number);
		let suffixes = ['k','m','b','t','qua','qui','sex','sept','oct','non','dec'];
		let suffix = '';
		for(let i = 0; i < suffixes.length; i++){
			if(num > 999){
				num = num / 1000;
				suffix = suffixes[i]
			}
		}
		if(capitalize){
			suffix = suffix.toUpperCase();
		}
		return num + '' + suffix;
	},
};

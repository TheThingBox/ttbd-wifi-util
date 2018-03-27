module.exports.parse = function parseIwconfig(str) {
	var banana = str.split("\n")[0].split('  ');
	var essid;
	if( banana[2] === " unassociated" ){
		essid = null;
	}
	else{
		essid = banana[3].split(':')[1]
		if(essid.substr(0,3) == "off"){
			essid = "off";
		} else {
			essid = essid.slice(1,-1)
		}
	}
	return {
		essid: essid
	};
}

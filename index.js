var iw = require('ttbd-iwlist')('wlan0');
var iwconfig_parser = require("./iwconfig-parser");
var childProcess = require('child_process');

module.exports.getWlan0 = function(callback){
	childProcess.exec('iwconfig', function(error, stdout, stderr) {
		if(stdout != ""){
			wlan0 = iwconfig_parser.parse(stdout);
			callback(wlan0);
		}
	});
}

module.exports.getWifiNetworks = function(callback){
	iw.scan(function(err,networks){
		callback(networks);
	});
}

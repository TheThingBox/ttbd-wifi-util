var exec_opt = {hydra_exec_host: "mosquitto"}
var iw = require('ttbd-iwlist')('wlan0', exec_opt);
var exec = require('ttbd-exec');
var iwconfig_parser = require("./iwconfig-parser");

module.exports.getWlan0 = function(callback){
	exec('iwconfig', exec_opt, function(error, stdout, stderr) {
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

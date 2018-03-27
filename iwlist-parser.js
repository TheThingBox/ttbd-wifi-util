function parseNetwork(str) {
	var property = str.split("\n                    ");
	var network = {};
	network.address = property[0].substr(15);
	network.essid = property[1].substr(6).slice(1, -1);
	network.protocol = property[2].substr(9);
	network.mode = property[3].substr(5);
	network.frequency = property[4].substr(9);
	network.encryption_key = property[5].substr(15);
	network.bit_rates = property[6].substr(9);
	network.extra = property[7].substr(6);
	return network;
}

module.exports.parse = function (result) {
	var networks_str = result.split("Cell ");
	networks_str.shift();
	var network;
	var networks = [];
	networks_str.forEach(function(str) {
		network = parseNetwork(str);
		networks.push(network);
	});
	return networks;
};

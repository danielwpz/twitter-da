var name = {};

/* fake data */
var data = {
	"batman+vs+superman": 0.63,
	"frozen": 0.89,
	"zootopia": 0.94,
	"deadpool": 0.71
}

var keys = Object.keys(data);

name.query = function(req, res) {
	var name = req.params.name;

	if (keys.indexOf(name) >= 0) {	

		var responde = {
			cnt: 100,
			pos: data[name],
			neg: 0.3
		}

		res.json(responde).end();
	}else {
		res.sendStatus(404).end();
	}
}

module.exports = name;

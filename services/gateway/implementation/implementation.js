var name = {};

name.query = function(req, res) {
	var name = req.params.name;

	var responde = {
		cnt: 100,
		pos: 0.7,
		neg: 0.3
	}

	res.json(responde).end();
}

module.exports = name;

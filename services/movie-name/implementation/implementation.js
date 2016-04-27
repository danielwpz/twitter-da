var name = {};

name.getFullName = function(req, res) {
	var movie = req.params.name;
	
	var responde = {
		name: movie
	};

	res.json(responde).end();
}

module.exports = name;

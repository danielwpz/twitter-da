var host = "";

function getResult(name, cb) {
	var url = generateResultUrl(name);

	$.ajax(url)
	.done(function(result) {
		console.log(result);

		var res = JSON.parse(result);
		var value = res.pos * 100;
		// change progress bar
		$("#bar-result").width(value + "%");
		$("#span-score").html("" + (res.pos * 10));
	})
	.fail(function() {
		console.log("Request failed");
	})
}

function generateResultUrl(name) {
	return host + "/query/" + name.replace(" ", "+");
}
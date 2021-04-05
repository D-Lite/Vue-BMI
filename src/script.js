fetch("https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=150&height=1.83", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d6653087d9msh2456f0d2bbc09f9p11a6d4jsn6dd9ea66a670",
		"x-rapidapi-host": "body-mass-index-bmi-calculator.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
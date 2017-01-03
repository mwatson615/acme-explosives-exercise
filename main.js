//use cat ID to get type, then type to get product, then do stuff with it

function getCategories() {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: `categories.json`
		})
		.done(function(data, textStatus, XHR) {
			resolve(data.id)
		})
	})
}
function getProducts() {
	return new Promise
}

// var promise1 = new Promise(function(resolve, reject) {
// 	var request1 = newXMLHttpRequest();
// 	request1.addEventListener("load", function() {
// 		var 
// 	})
// })

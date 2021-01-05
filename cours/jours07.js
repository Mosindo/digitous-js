var fs = require("fs");
// callback function (fonction de retour)
fs.readFile("./jours07.txt", function (error, data) {
	;

	console.log(data.toString())
});


/*02 - Map Double

- Créez une variable `array` contenant un tableau qui contiendra les valeurs `1`, `2`, `3`, `4` et `5`
- Créez une variable `double` qui appellera la méthode `.map()` pour contenir les doubles des valeurs de `array`
- Affichez les valeurs de `double` dans la console */

var array = [1, 2, 3, 4, 5];

function double(list) {
	return list.map(function (element) {
		return element * 2;
	})
}

console.log(double(array))

/* 03 - Map name */

var longName = [{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];

var shortName = longName.map(function (element) {
	return {
		name: `${element.firstName} ${element.lastName}`
	};
});

console.log(shortName);
/*04 - Filter Numbers

- Créez une variable `array` contenant un tableau qui contiendra les valeurs `1`, `"toto"`, `34`, `"javascript"` et `8`
- Créez une variable `numbers` qui appellera la méthode `.filter()` pour contenir les **nombres** de `array`
- Affichez les valeurs de `numbers` dans la console */
var array = [1, "toto", 34, "javascript", 8];
var numbers = array.filter((element) => {
	//return typeof element==="number";
	return isNaN(element) === false;
	//return parseInt(element) === element;


});

console.log(numbers)

/*05 - Filter Even

- Créez une variable `numbers` contenant un tableau qui contiendra les valeurs `1`, `2`, `3`, `4`, `5`, `6`, `7` et `8`
- Créez une variable `even` qui appellera la méthode `.filter()` pour contenir les nombres **pairs** de `numbers`
- Affichez les valeurs de `even` dans la console */

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var even = numbers.filter((element) => {
	return element % 2 == 0;
});
console.log(even);

/*06 - Cakes*/
var Cakes = [{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
];

var soldOut = (Cakes.filter(function (element) {
	return element.flavor === "chocolate";
})).map(function (element) {
	element.status = "sold out";
	return element;
});

console.log(soldOut);
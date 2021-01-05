/*01 - Countries

À l'aide de l'url suivante : "[https://restcountries.eu/rest/v1/all](https://restcountries.eu/rest/v1/all)" :

- Créez un array vide `countriesNames`
- Créez une fonction asynchrone `getCountries` pour récupérer les pays et stocker leurs noms dans l'array
- Afficher les noms des pays récupérés dans la console, séparés par un tiret */
var request = require("request");
var countriesNames = null;

function getCountries() {
    request.get("https://restcountries.eu/rest/v2/all", function (err, res, body) {

        var countriesNames = JSON.parse(body);
        var pays = countriesNames.map(function (element) {
            return element.name;
        });
        console.log(pays.join("-"))
    }); 
}

getCountries()

/*## 02 - Chuck Norris

À l'aide de l'api suivante (lisez bien la documentation) : [https://api.chucknorris.io/](https://api.chucknorris.io/)

- Créez une fonction asynchrone `getFact` qui récupèrera une blague Chuck Norris aléatoire à chaque fois que la fonction est lancée, et qui l'affichera dans la console */

function getFact(){
    request.get("https://api.chucknorris.io/jokes/random",function (err, res, body) {
        var chucknorrisJokes= JSON.parse(body);
        console.log(`${chucknorrisJokes.value} \n`)
    }); 
}

getFact();
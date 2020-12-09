// 01- Array

var fruits = ["mango","lemon","bluebrry"];
//Un tableau (array) est une liste de valeurs. Chaque élément à l'intérieur du tableau possède un index (la position de l'élément dans le tableau)
//Un tableau peut contenir toute sorte de valeurs : des strings, des nombres, des booleans, des fonctions, des objets, d'autres tableaux...
console.log(fruits);

// 02- Access
//array[index] : permet d'afficher un element  de le tableau en appelant l'index correspondant
var ingredients = ["eggs","milk","butter"];
console.log(ingredients[1]);
console.log(ingredients[2]);

// 03- Add an remove
var objects = ["pen","book","lamp"];

objects.unshift("chair");
console.log(objects);//La méthode unshift() ajoute un ou plusieurs éléments au début d'un tableau et renvoie la nouvelle longueur du tableau.

objects.pop();
console.log(objects)//La méthode pop() supprime le dernier élément d'un tableau et retourne cet élément. Cette méthode modifie la longueur du tableau.

objects.push("laptop");
console.log(objects);//La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau.
objects.shift()
console.log(objects)//La méthode shift() permet de retirer le premier élément d'un tableau et de renvoyer cet élément. Cette méthode modifie la longueur du tableau.

// 04- Order 
var number = [4,10,8,12,6]
number.reverse();
console.log(number);
number.sort((a, b) => a - b);// est-une formule pour avoir le tableau dans l'odre croissant != number.sort((a, b) => b - a) là le resultat sera décroissant;
console.log(number)

// 05- Boucle 
 var total = 0;
 var limit = 10;
 for(var i=0; i<= 10; i++){
     console.log(i);
 }
console.log(total =+i );
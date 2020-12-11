//### 01 - Comptons
//A l'aide d'une boucle while, affichez les nombres paires entre 50 et 200

var start = 50;
var finish =200;

while(start <= finish){
    console.log(start)
    start += 2;
}

/*### 02 - Try again

Créez une variable `dice` valant null et une variable `count` valant 0

Tant que `dice` ne vaut pas 6, assignez le résultat d'un lancé de dé aléatoire à dice et ajoutez 1 à `count`

Affichez `count`, le nombre de fois qu'il vous a fallu lancer le dé pour faire un 6 */
var min = 1;
var max = 6;
var dice = 0;
var resultat= 0;

while(dice !== 6){
     dice =  Math.floor(Math.random() * max + min );

}

/************ */
// je veux tiret au sort un nom chaque tour et m'arreter lorsuqe j'ai tiré tout les nom .
// qu'il y des nom dans mon tableau continué le tirage au sort .

var promo = ["Mosindo","Allan","Seb",];
var  dice = Math.floor(Math.random() * promo.length);
var ancienResultat = 0;

while(promo.length !== 0 ){
    dice = Math.floor(Math.random() * promo.length);
    console.log(promo[dice])
    promo.splice(dice,1)
    console.log(promo)
    
}
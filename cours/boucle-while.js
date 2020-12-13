//### 01 - Comptons
//A l'aide d'une boucle while, affichez les nombres paires entre 50 et 200

var start = 50;
var finish =200;

while(start <= finish){
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
var count= 0;

while(dice !== 6){
     dice =  Math.floor(Math.random() * max + min );
     var count= count +1;
     console.log( dice);
     console.log(count)

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

//03 - Course
var ussainBolt = 0;
var tysonGay = 0 ;
var distance1= Math.floor(Math.random() * 10+1);
var distance2= Math.floor(Math.random() * 10+1);

while( ussainBolt  <=100 && tysonGay <=100){
    console.log("usain bolt :"+ ussainBolt)
    console.log("tyson gay :"+  tysonGay)
    ussainBolt += distance1;
    tysonGay += distance2;
}

//04 - Des boites
//Réponse :
// box1=2
//box2=5

//05 - Des boites
// boucle infini car une fois le décompte enclenché i sera toujours supérieur à 0;
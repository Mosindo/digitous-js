/* ###01 - Somme des carrés

Calculez la somme des carrés des nombres de 5 à 10

Rappel: le carré d'un nombre est sa valeur, multipliée par lui même. exemple: 5x5 = 25

Resultat attendu: 355
var resultat= 0;
 for( var i = 5;i <= 10; ++i){
     var carre = i*i;
     resultat += carre;
     console.log(resultat)
 }*/

 /* ### 02 - Comptons

Comptez combien il y a de mutliple de 7 (pensez au modulo !) entre 100 et 1000

Résultat attendu: 128
var sept= 0;
for(var i = 100 ; i<= 1000; ++i){
   if(i % 7 === 0  ){
       sept += 1;
   }
   
}
console.log(sept)*/

/*### 03 - Chanceux

Lancez un dé 20 fois et affichez la somme de tout les résultats plus grand ou égale à 5
var max = 6;
var min = 1;
var sum= 0;
for( var i = 0 ; i<20 ;++i){
    var dice = Math.floor(Math.random() * (max - min + 1)) + min;
    if( dice >= 5){
        sum+= dice;
        console.log(dice);
    }

} 
console.log(sum)*/

/*### 04 - Des boites

A l'aide d'un papier et crayon, devinez ce qu'affiche le code suivant (interdit d'executer le code !)*/
// Réponse :
//box1 = 17;
// box2 = 30;
// i = 14;

// ### 05 - Des setiob
// Réponse :
//box1 = 42;
// i = 3;

//### 06 - Encore des boites
// Réponse :
//box1 = 3;
//box2 = 6;
// i =  3 ;


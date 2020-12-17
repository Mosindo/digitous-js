/*01 - Alphabet

- Créer une fonction `sortLetters` qui reçoit une string en paramètre
- La fonction retourne une string avec les mêmes lettres, dans l'ordre alphabétique
- Ne pas utilisez la méthode .sort()
- Appelez votre fonction avec "konexio" comme argument et vérifiez que vous obtenez "eiknoox" */

function sortLetters(string){
    var letter =string.split("");
    return letter.sort().join("");
}

console.log(sortLetters("bamboo"));

/*02 - XOXO
- Créez une fonction `countEach` qui reçoit une string contenant des x et des o en paramètre
- La fonction retourne true si il y a autant de x que de o, sinon elle retourne false
- Vérifiez que l'argument "xxxoooox" déclenche un true, et que "xox" déclenche un false */

function countEach(string2){
    var words = string2;
    var x=0;
    var o = 0;
    for(i = 0;i < words.length; i++){
        if (words.charAt(i)=== "x"){
            x++;
        }
        else if(words.charAt(i)=== "o"){
            o++;
        }
    }

    if (o === x){
        console.log("répartion parfaite");
    }
    else{
        console.log("répartion imparfaite"); 
    }
}

countEach("xxoooo")

/*03 - Palindrome

- Créez une fonction `checkPal` qui reçoit une string en paramètre
- La fonction retourne "Palindrome !" si le mot se lit dans les deux sens, sinon elle retourne "Nope"
- Vérifiez que vous obtenez un positif avec l'argument "racecar" mais pas avec "laptop"*/
function checkPal(string3){
    var mot =string3.split("");
    var motInverser=mot.reverse().join("");
    console.log(string3)
    console.log( mot);
    console.log(motInverser);
    if (string3 === motInverser){
        console.log("Mais petit génie , Tu as trouvé un palindrome !")
    }
    else{
        console.log("Cherche encore ")
    }
}

checkPal("ressasser");


/* 04 - Swap

- Créez une fonction `swap` qui reçoit une string en paramètre
- La fonction retourne une string avec la casse inverse : une majuscule deviendra minuscule et vice-versa
- Appelez votre fonction avec l'argument "Hello World" et vérifiez que vous obtenez "hELLO wORLD"*/

function swap(string4){
    var words="" ;
    for(i = 0;i < string4.length; i++){
        if (string4.charAt(i)===string4.charAt(i).toLowerCase()){
            words.push(string4.charAt(i).toUpperCase());
        }
        else{
            words.push( string4.charAt(i).toLowerCase());
        }
    }

    console.log( words);

};
// second solution
swap("Sans Tableau");

function swap(string4){
    var words=[] ;
    for(i = 0;i < string4.length; i++){
        if (string4[i]=== string4[i].toLowerCase()){
            words.push(string4[i].toUpperCase());
        }
        else{
            words.push( string4[i].toLowerCase());
        }
    }

    console.log( words.join(""));

};

swap("Avec TABleau");
/* Bonus I
- Créez une fonction `makeItSpongeBob` qui reçoit une string en paramètre
- La fonction retourne une string avec le même texte en alternant majuscule / minuscule
- Appelez votre fonction avec l'argument "Javascript is easy" et vérifiez le résultat
 */

 function makeItSpongeBob(string5){
    var words1 = "" ;
    for(var i = 0;i < string5.length; i++){
        if (i%2 === 0){
            words1+=string5.charAt(i).toUpperCase();
        }
        else{
            words1+=string5.charAt(i).toLowerCase();
        }
    }
    console.log (words1);
 }

 makeItSpongeBob("Javascript is easy")
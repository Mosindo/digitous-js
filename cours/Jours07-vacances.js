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
    var mot =string3.split();
    var motInverser=string3.reverse().join("")
    console.log()
}
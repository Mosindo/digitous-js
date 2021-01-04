/*## 02 - Compter les voyelles

Créez une fonction `countvowels` qui prend une string en paramètre et qui retourne le nombre de voyelles contenues dans un texte.*/

function countVowels(strings){
    var count = 0;
    for(var i = 0; i < strings.length; i++){
      if(strings[i] == 'a' || strings[i] == 'i' || strings[i] == 'o' ||strings[i] == 'e' ||strings[i] == 'u'||strings[i] == 'y'){
        count+=1;
      }
      
    }
    console.log(count);
}
countVowels('mbilinyama')

/* 03 - Langage codé

Créez une fonction `secretCode` qui prend une string en paramètre et qui remplace chaque lettre par leur ordre d'apparition dans l'alphabet + 10.

`A` devient `11`, `B` devient `12`, etc.

Retournez le résultat sous forme de string.

console.log(secretCode("secret")); // affichera 291513281530 */

function secretCode(strings2){
    var pattern = /^[a-z]+$/i;
    if(strings2.match(pattern)){
        var result= [];
        for(var i =0; i <strings2.length ;i++){
            var alpha = strings2.toLowerCase().charCodeAt(i)-97+11;
            console.log(alpha)
            result.push(alpha)  
        }
        console.log(result.join(""));
    }
    else{
    console.log('Please input alphabet characters only');
    return false;
    }
    
    
}
secretCode("Secret")
/*## 04 - Répertoire musical

- Créez les objets `song1`, `song2` et `song3` contenant les clés suivantes : `title` pour le titre, `artist` pour le chanteur ou le groupe, et `year` pour l'année de sortie. Assignez comme valeurs celles de vos trois chansons préférées.
- Créez une variable `music` qui contient un tableau contenant ces trois variables.
- Affichez dans la console : la valeur `title` de `song1`, la valeur `artist` de `song3` et la valeur `year` de `song2`.*/
var song1={
    title : "This Is How We Do It",
    artist :"Montell Jordan" ,
    year : 1995,
};

var song2={
    title :"Juicy" ,
    artist :"Notorious B.I.G." ,
    year : 1994,
};

var song3={
    title : "Smells Like Teen Spirit",
    artist :"Nirvana " ,
    year : 1991,
};

var music =[song1,song2,song3];
console.log(song1.title);
console.log(song3.artist);
console.log(song2.year);
/*## 05 - Habiller des personnages

Vous avez créé un jeu avec des personnages et vous voulez écrire un script qui sélectionne leurs vêtements.

1. Vous créez un tableau qui contient la tenue qu'ils doivent tous porter et un autre qui liste toutes les couleurs possibles. Copiez les deux tableaux ci-dessous :

    var clothes = ["chemise", "pantalon", "veste", "chaussures"];
    var colors = ["bleu", "rouge", "vert", "jaune"];
    

2. Créez une fonction `displayOnShelves` qui prend deux parametres `clothes` et `colors` et qui retourne une liste de liste `shelves` représentant chacune des étagères de l'armoire. Cette fonction doit generer le résultat suivant :

    ```jsx
    [
    	["chemise bleu", "chemise rouge", "chemise vert", "chemise jaune"],
    	["pantalon bleu", "pantalon rouge", "pantalon vert", "pantalon jaune"],
    	["veste bleu", "veste rouge", "veste vert", "veste jaune"],
    	["chaussures bleu", "chaussures rouge", "chaussures vert", "chaussures jaune"],
    ]
    ```
3. Créez à présent une fonction `getDressed` qui sélectionne aléatoirement un vêtement de chaque étagère. Vous obtiendrez, par exemple :

    ```jsx
    var outfit = ["chemise rouge", "pantalon vert", "veste rouge", "chaussures bleu"]
    ```

4. Comme vous avez un minimum de bon goût, vous rajoutez des conditions :
    - Si `outfit` contient quatre couleurs différentes, affichez `"Trop de couleurs !"` et relancez la fonction.
    - Si `outfit` contient une seule couleur, affichez `"Pas assez de couleur !"` et relancez la fonction.
    - Si `outfit` contient deux couleurs, affichez `outfit` et `"Pas mal, let's go !"`.
    - Si `outfit` contient trois couleurs, affichez `outfit` et `"Parfait, let's go !"`.

    ## Bonus designer

    Pour combler les manques de l'enseignement à distance, vous travaillez sur un projet d'application qui doit permettre d'afficher une classe virtuelle dans laquelle les apprenants pourront se déplacer grace à un système de drag and drop. Vous êtes chargé du design de la page et vous utilisez bootstrap.

    - Créez un modèle de **card (** [https://getbootstrap.com/docs/4.5/components/card/](https://getbootstrap.com/docs/4.5/components/card/) ) pour représenter un apprenant.
    - Dans un container qui contiendra toute la page, créez une zone par défaut où seront disposées les cards des apprenants.
    - Créez une zone "file d'attente" sur laquelle déplacer les cards pour demander de l'aide au formateur.
    - Créez d'autres zones dans lesquelles vous souhaiteriez pouvoir vous déplacer tout au long de la journée.
    - Laissez libre cours à votre imagination pour décorer les lieux et ajouter des features.*/

    var clothes = ["chemise", "pantalon", "veste", "chaussures"];
    var colors = ["bleu", "rouge", "vert", "jaune"];
    var combinaison =[]
    function displayOnShelves(array1, array2) {
        for (var i = 0; i < array2.length; i++) {
            combinaison.push([array1[i]+" "+array2[0],array1[i]+" "+array2[1],array1[i]+" "+array2[2],array1[i]+" "+array2[3]]);
            
          }
          console.log(combinaison);
      }
    function getDressed(array1, array2){
        combinaison.push([array1[i]+" "+array2[0],array1[i]+" "+array2[1],array1[i]+" "+array2[2],array1[i]+" "+array2[3]]);
        var randomItem = combinaison[Math.floor(Math.random()*combinaison.length)];
        console.log(randomItem)  
    }
    //displayOnShelves(clothes,colors);
    getDressed(clothes,colors);
// 01- Array
var fruits = ["mango","lemon","blueberry"];
console.log(fruits);
console.table(fruits);

// 02- Access
var ingredients =["eggs","milk","butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

// 03-Add and Remove
var objects = ["pen","book","lamp"];
objects.unshift("chair");
console.log(objects);
objects.pop();
console.log(objects);
objects.push("laptop");
console.log(objects);
objects.shift();
console.log(objects);

// 04-Order
var numbers = [4,10,8,12,6];
numbers.reverse();
console.log(numbers)
numbers.sort((a, b) => a - b);
console.log(numbers);

// 05-boucle
var total = 0 ;
var limit = 10 ;
for (var i = 0 ; i <=limit; i++ ){
    total += i ;
    // 1 )total = 0 + 1 = 1
    // 2 )total = 1 + 2 = 3
    // 3 )total = 3 + 3 = 6
    // 4 )total = 6 + 4 = 10
    // 5 )total = 10 + 5 = 15
    // 6 )total = 15 + 6 = 21
    // ....
    console.log(total)
    //console.log(i) ;
}
console.log(total);
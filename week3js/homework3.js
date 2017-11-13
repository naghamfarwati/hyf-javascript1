let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
myString = myString.replace(/,/g, ' ');
console.log(myString);
//
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
//
Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};
favoriteAnimals.insert(1, 'meerkat');
console.log('i write a new function "insert" to insert a new element to my array and i can choose which index i want to put it');
console.log(favoriteAnimals);
//
console.log("The array has a length of: " + favoriteAnimals.length);
//
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
//
favoriteAnimals.splice(favoriteAnimals.indexOf('meerkat'), 1);
console.log(favoriteAnimals);
//
console.log("The item you are looking for is at index: " + favoriteAnimals.indexOf('meerkat'));
//
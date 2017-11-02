//question1//
console.log("Hello World!");
console.log("Hallo Wereld");
console.log("مرحبا جميعا");
console.log("Selam Dünya");
//question2//
console.log("I'm awesome");
// i write "" instead of ''//
//question3//
var x = 87;
console.log(x);
console.log('the value of my variable x will be: 87');
//question4//
var y = ('syria');
console.log(y);
console.log('the value of my string will be: syria');
y = 'aleppo';
console.log(y);
console.log('the value of my string will be: aleppo');
//question5//
var z = 7.25;
console.log(z);
var a = 7;
console.log(a);
if(z>a){
    console.log(z);   
} else {
    console.log(a);
}
console.log('the highest value will be z: 7.25')
//question6//
var emptyArray = [];
console.log('the result will be an empty array: []');
console.log(emptyArray);
var myFavoriteAnimals = ['panda','penguin','owl'];
console.log(myFavoriteAnimals);
console.log('the result will be the array myFavoriteAnimals: panda,penguin,owl');
myFavoriteAnimals = ['panda','penguin','owl','baby pig'];
console.log(myFavoriteAnimals);
//question7//
let myString = ("this,is,a,test");
console.log(myString);
myString.length;
console.log(myString.length);
//question8//
let first = 'Hello';
console.log('The value of my variable first is: '+ first);
let second = 9;
console.log('The value of my variable second is: '+ second);
let third = 'Bye';
console.log('The value of my variable third is: '+ third);
let fourth = 33;
console.log('The value of my variable fourth is: '+ fourth);
console.log(typeof first);
console.log(typeof second);
console.log(typeof third);
console.log(typeof fourth);
if(typeof first === typeof third && typeof second === typeof fourth){
    console.log('Same Type');
}
else{
    console.log('Not Same Type');
}
if(typeof first === typeof second && typeof third === typeof fourth){
    console.log('Same Type');  
}
else{
    console.log('Not Same Type');
}
//question9//
var x = 7;
x = x % 3;
console.log(x);
console.log('the answer for this statement by node : 1');
console.log('the meaning of % is a number divide by another number and the result will be th rest of this operation');
//question10//
var requestArray = ['nagham',12,76,'farwati'];
console.log(requestArray);
console.log('yes we can create an array and contains strings and numbers like the last array');
if(6/0 === 10/0){
    console.log('True');
}
else{
    console.log('False');
}
console.log('the answer is True and that meaning is the answer for two is 0');
//end homework week1 for javascript//

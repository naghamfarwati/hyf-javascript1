//question1//
function sum(x,y,z){
 sum = x+y+z;
  return sum;
}
console.log(sum(7,9,3));
//question2//
function colorCar(color){
console.log(`a ${color} car`);
}
colorCar('red');
//question3//
function flower(color, sort, height){
  this.color = color;
  this.sort = sort;
  this.age = height;
}
  var newFlower = new flower('white', 'Lilium Casa Blanca', 4);
  console.log(newFlower);
//question4//
function vehicleType(color,code){
  this.color = color;
  if(code==1){
     console.log("A " + color + " car.");
  }
  else if(code == 2){
    console.log("A " + color + " motorbike.")
  }
}
   vehicleType('blue',2);
//question5//
console.log(3==3); //prints true
console.log('the answer will be true cause it is true');
//question6//
function vehicle(color,code,age){
  this.color = color;
  if(age>=5){
    if(code==1){
     console.log("A " + color + " used "+ "car.");
  }
  
  else if(code == 2){
    console.log("A " + color  + " used " + "motorbike.");
  }
  }
  else if(age<5){
  if(code==1){
     console.log("A " + color + " new " + "car.");
  }
  
  else if(code == 2){
    console.log("A " +  color + " new " + "motorbike.");
  }
  }
}
   vehicle('blue',1,5);
//question7//
function vehicle(color,type,age){
  this.color = color;
  let list = ["car", "motorbike", "caravan", "bike"][type - 1];
  if(age>=5){ 
     console.log("A " + color + " used "+ list);
  }
  else if(age<5){
    console.log("A " +  color + " new " + list);
  } 
}
vehicle('blue',3,5);
//question8//
console.log('i can get the third element from the list by put number 3 instead of type, when i called my function (vehicle)in the end');
console.log('or from[type - 1]if i write[type -2],which mean any index in my array(list) i want, like the next example');
function vehicle(color,type,age){
  this.color = color;
  let list = ["car", "motorbike", "caravan", "bike"][type - 2];
  if(age>=5){ 
     console.log("A " + color + " used "+ list);
  }
  else if(age<5){
    console.log("A " +  color + " new " + list);
  } 
}
vehicle('blue',4,5);
//question9//
function vehicle(color,type,age){
  this.color = color;
  let list = ["car", "motorbike", "caravan", "bike"][type - 1];
  if(age>1){ 
     console.log("a " + color + " used "+ list);
  }
  else if(age<=1){
    console.log("a " +  color + " new " + list);
  } 
}
vehicle('green',3,1);
//question10//
function vehicle(list){
  var list = ["cars", " motorbikes", " caravans", "bikes"];
  var a = list.pop();
  for(i = 0 ; i < list.length ; i++){
  }
 console.log("Amazing Joe's Garage, we service " + list + " and " + a );
}
vehicle();
//question11//
function vehicle(color,type,age){
  this.color = color;
  let list = ["car", "motorbike", "caravan", "bike", "trucks"][type - 1];
  if(age>=5){ 
     console.log("A " + color + " used "+ list);
  }
  else if(age<5){
    console.log("A " +  color + " new " + list);
  } 
}
vehicle('blue',3,5);
console.log('the answer is yes because i used [type - 1] that allows me to choose which element i want');
//question12//
var emptyObject = {};
//question13//
var myTeachers = {
  firstLang : "Philip",
  secondLang : "Jim",
  thirdLang : "Shah rough",
  fourthLang : "Ivana"
};
console.log(myTeachers);
//question14//
var myTeachers = {
  ['Philip']: 'HTML',
  ['Jim']: 'Javascript',
  ['Shah rough']: 'PHP',
  ['Ivana']: 'CSS'
};
console.log(myTeachers);
//question15//
function mult(a,b){
  return a * b;
}
function math(mult){
  var a = 7;
  var b = 6;
  return mult(a,b);
}
console.log(math(mult));
//question16//
let x = [1,2,3];
let y = [1,2,3];
let z = y;
if(x == y){
  console.log('x = y');
}
else if (x === y){
  console.log('x = y');
}
else{
  console.log('not equal');
}
if (z == y){
  console.log('z = y');
}
else if (z == x){
  console.log('z = x');
}
else{
  console.log('not equal');
}
//question17//
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
if(o2 = o3){
 console.log('true');
}
else{
 console.log('false');
}
console.log('the result always will be true in the different changes like: o3=o2 or o1=o3, and that beacuse we use just one =');
//question18//
let bar = 42; 
typeof typeof bar;
console.log(typeof typeof bar);
console.log('the answer will be "string" cause it will not give us the type of the value of bar, it gives us the type of the variable,the type of the"bar"and it is a string');
//end homework2.js//
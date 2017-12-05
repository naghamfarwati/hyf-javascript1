//Q1//
let arr = [];
function sayThree(i) {
    if (i % 3 === 0) {
        arr.push(i);
    }
}


function sayFive(i) {
    if (i % 5 === 0) {
        arr.push(i);
    }
}

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    for (let i = startIndex; i <= stopIndex; i++) {

        if (i % 3 === 0) {
            sayThree(i);
        }
        else if (i % 5 === 0) {
            sayFive(i);
        }
        else if ((i % 3 === 0) && (i % 5 === 0)) {
      sayThree(i);
      sayFive(i);
        }
        
    }

}
threeFive(1, 20, sayThree, sayFive);
console.log(arr);
//Q2//
function repeatStringNumTimes(str, num) {
    if (num > 0) {
        return str.repeat(num);
    }
    else if (num < 0) {
        return "";
    }
}

repeatStringNumTimes("abc", 6);
//Q2-1//
function repeatStringNumTimes(str, num) {
    repeat = "";
    for (; num > 0; repeat += str, num--) { }
    return repeat;

}
console.log(repeatStringNumTimes("abc", 3));
//Q2-2//
function repeatStringNumTimes(str, num) {
    repeat = "";
    while (num > 0) {
        repeat += str;
        num--;
    }
    return repeat;

}
console.log(repeatStringNumTimes("abc", 2));
//Q3//
var Car = function () {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;
};

var myCar = new Car();
console.log(myCar);

var MotorBike = function () {
    this.wheels = 2;
    this.engines = 1;
    this.seats = 1;
};
var myMotorBike = new MotorBike();
console.log(myMotorBike);
//Q4//
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
//Q5//
//Q6//
console.log("First function gives us the same number because it is a value, and by this way the function keep the value of this variable which is 9, but the second function takes the value of the key, and the function takes the value and added the number (1) to it, so we get the value of key like this: {x: 10}");
//q1//
let numbers = [1, 2, 3, 4];
let newNumbers = numbers.filter(number => number % 2 !== 0).map(number => number * 2);
console.log("The doubled numbers are", newNumbers);
//q2//
newNumbers = numbers.reduce(function (newArray, number) {
    newArray.push(number);
    if (number % 2 === 0) {
        newArray.push(number);
    }
    return newArray;
}, []);
console.log("The duplicated even numbers", newNumbers);
//q3//
let monday = [
        {
            name     : 'Write a summary HTML/CSS',
            duration : 180
        },
        {
            name     : 'Some web development',
            duration : 120
        },
        {
            name     : 'Fix homework for class10',
            duration : 20
        },
        {
            name     : 'Talk to a lot of people',
            duration : 200
        }
    ];
 
let tuesday = [
        {
            name     : 'Keep writing summery',
            duration : 240
        },
        {
            name     : 'Some more web development',
            duration : 180
        },
        {
            name     : 'Staring out the window',
            duration  : 10
        },
        {
            name     : 'Talk to a lot of people',
            duration : 200
        },
        {
            name     : 'Look at application assignments new students',
            duration : 40
        }
    ];
  //first//   
let tasks = [monday, tuesday];
tasks = monday.concat(tuesday);
let duration = tasks.map(task => +task.duration).reduce((a, b) => a + b, 0);
console.log("The time that Maartje needs ", duration , " minutes.");
console.log("this is the duration of tasks in minutes.");
//second//
duration = tasks.map(task => +task.duration).reduce((a, b) => a + b, 0)/60;
console.log("The time that Maartje needs ", duration , " hours.");
console.log("this is the duration of tasks in hours.");
//or//
let durationHours = tasks.map(task => task.duration / 60);
console.log("Every task takes ", durationHours, " hours.");
//third//
let longTasks = durationHours.filter(duration => duration >= 2);
console.log("The longest tasks " , longTasks);
//fourth//
let totalLongTasks = longTasks.reduce((a, b) => a + b, 0);
console.log("The total of the longest task ", totalLongTasks);
//or for the total hours that Maartje works//
duration = tasks.map(task => +task.duration).reduce((a, b) => a + b, 0) / 60;
console.log("The time that Maartje needs ", duration, " hours.");
//fifth//
let salary = (tasks.map(task => +task.duration).reduce((a, b) => a + b, 0) / 60) * 15;
console.log("The money that Maartje earns", salary, "€ for all hours.");
//end//
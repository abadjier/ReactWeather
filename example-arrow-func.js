var names = ['Andrew', 'Rali', 'Chris'];

// names.forEach(function(name) {
//     console.log('forEach', name);
// });

// // arrow functions can be used in place of anonymous functions
// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });

// // if there is only one line in the function body can skip the {}:
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Rali'));


// arrow functions take theit parent 'this' binding:
// var person = {
//     name: 'Rali',
//     greet: function() {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name);
//         });



// using anonymous function changes the value of 'this' and it no longer points to the parent-object

//     names.forEach(function(name) {
//        console.log(this.name + ' says hi to ' + name);
//   });

//     }

// };

// person.greet();

// challenge
function add(a, b) {
    return a + b;
}

var addStatement = (a, b) => {
    return a + b;
}

var addExpression = (a, b) => a + b;

console.log(add(1, 3));
console.log(add(9, 0));

console.log('addStatement', addStatement(2, 3));
console.log('addExpression', addExpression(3, 3));
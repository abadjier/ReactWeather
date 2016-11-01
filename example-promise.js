function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('a and b should be numbers');
        }
    });
}

addPromise(5, 7).then(function(sum) {
    console.log('success', sum);
}, function(err) {
    console.log("Error", err);
});

addPromise('Andrew', 9).then(function(sum) {
    console.log('this should not print');
}, function(err) {
    console.log('This should print', err);
});
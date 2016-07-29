var id = 20;

var nextId = function () {
    return id++;
};

console.log( 'Some unique IDs: ' );
console.log( 'Next ID: ', nextId() );
id = 20;
console.log( 'Next ID: ', nextId() );
// Oops.
// 1. Re-write nextId such that id cannot be reset anymore from the outside.

var id = 20;

var nextId = function () {
    return id++;
};

console.log( 'Some unique IDs: ' );
console.log( 'Next ID: ', nextId() );
id = 20;
console.log( 'Next ID: ', nextId() );
// Ups.
// 1. nextId so umbauen, dass id von aussen nicht mehr zurückgesetzt werden kann.

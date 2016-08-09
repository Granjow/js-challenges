/**
 * Constructs a new O.
 */
var O = function ( x ) {
    this.x = x;
    return this;
};

var Q = function ( x ) {
    this.x = x;
    return this;
};

var o1 = O( 42 );
var o2 = O( 43 );
console.log( o1.x, o2.x );

var q = Q( 55 );
console.log( o1.x, o2.x, q.x );

// o should have the value 42 and p should have the value 43.
// 1. How can this be fixed?
// 2. Why exactly is it this way? (Hint: Which object is stored in o before the correction, which one after the correction?)

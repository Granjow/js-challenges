/**
 * Constructs a new O.
 */
var O = function ( x ) {
    this.x = x;
    return this;
};

var o = O( 42 );
var p = O( 43 );
console.log( o.x, p.x );

// o müsste den Wert 42 und p den Wert 43 haben.
// 1. Wie kann man das korrigieren?
// 2. Warum genau ist das so? (Tipp: Welches Objekt bekommt man von O vor der Korrektur, welches nach der Korrektur zurück?)
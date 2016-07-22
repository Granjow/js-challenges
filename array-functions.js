var ages = [ 2, 3, 4, 10, 50, 42 ];

// 1. Ersetzen durch Array.map()
//    Bonuspunkte für Arrowfunktion :) (in ganzer Datei!)
var ageObjects = [];
for ( var i = 0; i < ages.length; i++ ) {
    ageObjects.push( { age: ages[ i ] } );
}
// Ende

// 2. Ersetzen durch Array.reduce()
//    Wieder ein Einzeiler!
var ageSum = 0;
for ( var i = 0; i < ages.length; i++ ) {
    ageSum += ages[ i ];
}
// Ende

// 3. Ersetzen durch Array.reduce()
var maxAge = 0;
for ( var i = 0; i < ageObjects.length; i++ ) {
    if ( maxAge < ageObjects[ i ].age ) {
        maxAge = ageObjects[ i ].age;
    }
}
// Ende

var size = [ 23, 33.2, 34.5, 14.7, 6.543 ];

// 4. Ersetzen durch Arrowfunktion
var fMax = function ( a, b ) {
    return Math.max( a, b );
};
// Ende


// 5. Ersetzen durch Array.reduce()
//    Diesmal fMax verwenden
var maxSize = 0;
for ( var i = 0; i < size.length; i++ ) {
    maxSize = fMax( maxSize, size[ i ] );
}
// Ende

// 6. Array.reduce einsetzen.
//    Ganz viele Bonuspunkte und ein Pokéball, wenn fürs .reduce()-Callback die fMax-Funktion direkt verwendet wird
//    (Ohne Parameterübergabe oder ähnlich). Hint: 1. Aufgabe.
var maxAge2 = 0;
for ( var i = 0; i < ageObjects.length; i++ ) {
    maxAge2 = fMax( maxAge2, ageObjects[ i ].age );
}
// Ende

var test = ( nr, res ) => console.log( nr + ': ' + (res === true ? 'ok' : (res === false ? 'nope' : 'unknown (self-check)')) );
test( 1, ageObjects[ 2 ].age === ages[ 2 ] );
test( 2, ageSum === 111 );
test( 3, maxAge === 50 );
test( 4, undefined );
test( 5, maxSize === 34.5 );
test( 6, maxAge2 === 50 );

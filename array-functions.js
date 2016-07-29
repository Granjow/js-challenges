var ages = [ 2, 3, 4, 10, 50, 42 ];

// 1. Replace by Array.map()
//    Bonus points for using arrow functions! (Applies to whole file!)
var ageObjects = [];
for ( var i = 0; i < ages.length; i++ ) {
    ageObjects.push( { age: ages[ i ] } );
}
// End

// 2. Replace by Array.reduce()
//    Again, this should result in a one-liner.
var ageSum = 0;
for ( var i = 0; i < ages.length; i++ ) {
    ageSum += ages[ i ];
}
// End

// 3. Replace by Array.reduce()
var maxAge = 0;
for ( var i = 0; i < ageObjects.length; i++ ) {
    if ( maxAge < ageObjects[ i ].age ) {
        maxAge = ageObjects[ i ].age;
    }
}
// End

var size = [ 23, 33.2, 34.5, 14.7, 6.543 ];

// 4. Replace by arrow function
var fMax = function ( a, b ) {
    return Math.max( a, b );
};
// End


// 5. Replace by Array.reduce()
//    Use fMax this time.
var maxSize = 0;
for ( var i = 0; i < size.length; i++ ) {
    maxSize = fMax( maxSize, size[ i ] );
}
// End

// 6. Use Array.reduce().
//    Loads of bonus points and a Pokéball when using fMax like .reduce( fMax ). This requires an additional step beforehand,
//    use task 1 as hint!
var maxAge2 = 0;
for ( var i = 0; i < ageObjects.length; i++ ) {
    maxAge2 = fMax( maxAge2, ageObjects[ i ].age );
}
// End

var test = ( nr, res ) => console.log( nr + ': ' + (res === true ? 'ok' : (res === false ? 'nope' : 'unknown (self-check)')) );
test( 1, ageObjects[ 2 ].age === ages[ 2 ] );
test( 2, ageSum === 111 );
test( 3, maxAge === 50 );
test( 4, undefined );
test( 5, maxSize === 34.5 );
test( 6, maxAge2 === 50 );

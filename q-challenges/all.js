var Q = require( 'q' );

var f1 = () => {
    var deferred = Q.defer();
    setTimeout( () => {
        console.log( 'f1 done.' );
        deferred.resolve( true );
    }, Math.random() * 2000 );
    return deferred.promise;
};
var f2 = () => {
    var deferred = Q.defer();
    setTimeout( () => {
        console.log( 'f2 done.' );
        deferred.resolve( true );
    }, Math.random() * 2000 );
    return deferred.promise;
};
var f3 = () => {
    var deferred = Q.defer();
    setTimeout( () => {
        console.log( 'f3 done.' );
        deferred.resolve( true );
    }, Math.random() * 2000 );
    return deferred.promise;
};

var fEnd = () => {
    console.log( 'All functions should have completed by now.' );
};

// 1. Re-write the following code such that the functions f1, f2, f3 run asynchronously
//    and fEnd is called after all of them have finished.

f1();
f2();
f3();

fEnd();
var Q = require( 'q' );

/*
 You want to take a picture of a very special sunset and have to get there as fast as possible!
 There are the following options which you should try in this order (due to speed issues):
 1. Go by car.
 2. If the fuel is empty, take the bike instead.
 3. If anything else fails (e.g. car gets stuck), run the remaining distance.
 */

// Configuration; you have to arrive all the time!
var opts = {
    fuelEmpty: false,
    barrier: true,
    handlebarsMissing: true
};

var start = Date.now(),
    position = 'home';

var checkCar = () => {
    var deferred = Q.defer();

    console.log( 'Running to the garage for the car ...' );
    setTimeout( () => {
        console.log( `Arrived at the car! (${Date.now() - start} ms)` );
        if ( opts.fuelEmpty ) {
            console.log( 'Fuel is empty :(' );
            deferred.reject( 'Fuel empty' );
        } else {
            console.log( 'All fine, departing!' );
            deferred.resolve();
        }
    }, 1200 );

    return deferred.promise;

};

var driveByCar = () => {
    var deferred = Q.defer();

    if ( opts.barrier ) {
        // Oh no, the street is blocked halfway down!
        setTimeout( () => {
            console.log( `Street is blocked! (${Date.now() - start} ms)` );
            position = 'barrier';
            deferred.reject( 'Street blocked' );
        }, 2800 );
    } else {
        // All fine
        setTimeout( () => {
            console.log( `Arrived at the sunset, can take pictures now! (${Date.now() - start} ms)` );
            position = 'destination';
            deferred.resolve();
        }, 3200 );
    }

    return deferred.promise;
};

var takeBike = () => {
    var deferred = Q.defer();

    console.log( 'Running to the bike stand ...' );
    if ( position === 'home' ) {
        if ( opts.handlebarsMissing ) {
            setTimeout( () => {
                console.log( 'Cannot take bike, handlebars are missing!' );
                deferred.reject( 'Handlebars missing' );
            }, 1400 );
        } else {
            setTimeout( () => {
                console.log( `Arrived at the sunset, can take pictures now! (${Date.now() - start} ms)` );
                position = 'destination';
                deferred.resolve();
            }, 1800 );
        }

    } else {
        console.log( 'Cannot get bike, not at home anymore!' );
        deferred.reject( 'Wrong place for getting bike' );
    }

    return deferred.promise;
};

var runByFoot = () => {
    var deferred = Q.defer(),
        dt;

    console.log( 'Running now ...' );
    if ( position === 'barrier' ) {
        dt = 2000;
    } else if ( position === 'destination' ) {
        console.log( 'No need to run, already at destination!' );
        dt = 0;
    } else {
        dt = 3000;
    }

    setTimeout( () => {
        console.log( `Ran there by foot and arrived, can take pictures now! (${Date.now() - start} ms)` );
        position = 'destination';
        deferred.resolve();
    }, dt );

    return deferred.promise;
};

var takePicture = () => {
    if ( position === 'destination' ) {
        console.log( `Taking a great photograph right now! (${Date.now() - start} ms)` );
    } else {
        console.log( 'Did not really make it there ...' );
    }
};

var relax = () => {
    var deferred = Q.defer();

    console.log( 'Relaxing a bit ...' );
    setTimeout( () => {
        console.log( `Relaxing just a minute. (${Date.now() - start} ms)` );
        deferred.resolve();
    }, 400 );

    return deferred.promise;
};

// 1. Modify the code below that you always relax() before taking the picture.
// 2. Re-write the following code with Q's propagation mechanism such that no function is used more than once.
//    The logic below contains redundancy. For example, at the end, you always want to take a picture (no matter what),
//    and currently takePicture() is at the end of every branch of the decision tree. To relax() before taking a picture,
//    all occurrences of takePicture() have to be modified.
//    Use Propagation to remove this redundancy.
//
//    See the README.md for a hint.

checkCar().then( () => {
    driveByCar().then( takePicture, () => {
        takeBike().then( takePicture, () => {
            runByFoot().then( takePicture, takePicture );
        } );
    } );
}, () => {
    takeBike().then( takePicture, () => {
        runByFoot().then( takePicture, takePicture );
    } );
} );

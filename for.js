var tasks = [ 'cleaning', 'gardening', 'cooking', 'fletching' ];

// What is going wrong here? Why?
// 1. Fix the callback function that is passed to setTimeout.
for ( var i = 0; i < tasks.length; i++ ) {

    var task = tasks[ i ],
        delay = Math.floor( Math.random() * 2000 );

    console.log( `Will do ${task} in ${delay} ms.` );

    // Start the tasks asynchronously
    setTimeout( () => {
        console.log( `Finished ${task}.` );
    }, delay )
}

// 2. Re-write the whole loop using a functional approach.

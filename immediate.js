// 1. Convert the lines below to immediate invocation such that the function
//    onlyUsedOnce() cannot be accessed again.
var onlyUsedOnce = function () {
    return `Today is ${new Date().toDateString()}.`;
};
var today = onlyUsedOnce();
// End

console.log( today );


// 2. Something is really going wrong here. We have an immediate invocation of a function
//    which prints what it receives, which is 4. … or is it?
//    Find the error and fix it!
var elaborateFunction = () => {
    return ( l ) => {
        l( 42 );
        return () => 42
    };
};

elaborateFunction()

( ( x ) => console.log( 'Received ', x ) )( 4 );
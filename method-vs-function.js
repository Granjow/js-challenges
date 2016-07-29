var Person = function ( name ) {
    this.name = name;
};
Person.prototype = {
    getName: function () {
        return this.name;
    }
};

var beautify = function ( functionReturningName ) {
    console.log( '{{ °° ' + functionReturningName() + ' °° }}' );
};

var fritz = new Person( 'Fritz' );

// Works
var returnAName = () => 'Robin';
beautify( returnAName );

// Does not work
// 1. Why?
// 2. How can this be fixed without changing the previous lines (assuming that Person and beautify() are library functions)?
beautify( fritz.getName );

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

// Funktioniert
beautify( () => 'Robin' );

// Funktioniert nicht
// 1. Weshalb?
// 2. Wie kann man das lösen, ohne die vorherigen Zeilen zu ändern (angenommen, Person und beautify sind Library-Funktionen)?
beautify( fritz.getName() );

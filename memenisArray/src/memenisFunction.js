function memenisFunction( value ) {
	return ( typeof value === 'function' );
} // end FUNCTION isFunction()


// EXPORTS //

module.exports = isFunction;



console.log( isFunction( function foo(){} ) );
// returns true
 
console.log( isFunction( {} ) );
// returns false
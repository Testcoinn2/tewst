function isBoolean( value ) {
	return value === true || value === false;
} // end FUNCTION isBoolean()


// EXPORTS //

module.exports = isBoolean;


console.log( isBoolean( false ) );
// returns true
 
console.log( isBoolean( true ) );
// returns true
 
console.log( isBoolean( new Boolean( true ) ) );
// returns false
 
console.log( isBoolean( 5 ) );
// returns false
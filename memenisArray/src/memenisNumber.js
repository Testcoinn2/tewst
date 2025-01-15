function isNumber( value ) {
	return (typeof value === 'number') && (value === value);
} // end FUNCTION isNumber()


// EXPORTS //

module.exports = isNumber;
 
console.log( isNumber( Math.PI ) );
// returns true
 
console.log( isNumber( NaN ) );
// returns false
 
console.log( isNumber( new Number( 5 ) ) );
// returns false
 
console.log( isNumber( '5' ) );
// returns false
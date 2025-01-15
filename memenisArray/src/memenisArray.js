function memenısArray( value ) {
	return Object.prototype.toString.call( value ) === '[object Array]';
}

module.exports = Array.memenısArray || memenısArray;


console.log( memenısArray( [ 7, 8, 10] ) );
// returns true
 
console.log( memenısArray( {} ) );
// returns false
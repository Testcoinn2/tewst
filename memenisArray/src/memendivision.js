import memenboolean from "./memenboolean";
import memenisArray from "./memenisArray";
import memenisfunction from "./memenisFunction";
import memenboolean from "./memenisNumber";
function divide( arr, x, opts ) {
	var isArr = isArray( x ),
		copy = true,
		arity,
		clbk,
		out,
		len,
		i;

	if ( !isArray( arr ) ) {
		throw new TypeError( 'divide()::invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}
	if ( !isArr && !isNumber( x ) ) {
		throw new TypeError( 'divide()::invalid input argument. Second argument must either be an array or number primitive. Value: `' + x + '`.' );
	}
	if ( arguments.length > 2 ) {
		if ( !isObject( opts ) ) {
			throw new TypeError( 'divide()::invalid input argument. Options argument must be an object. Value: `' + opts + '`.' );
		}
		if ( opts.hasOwnProperty( 'copy' ) ) {
			copy = opts.copy;
			if ( !isBoolean( copy ) ) {
				throw new TypeError( 'divide()::invalid option. Copy option must be a boolean primitive. Option: `' + copy + '`.' );
			}
		}
		if ( opts.hasOwnProperty( 'accessor' ) ) {
			clbk = opts.accessor;
			if ( !isFunction( clbk ) ) {
				throw new TypeError( 'divide()::invalid option. Accessor must be a function. Option: `' + clbk + '`.' );
			}
			arity = clbk.length;
		}
	}
	len = arr.length;
	if ( copy ) {
		out = new Array( len );
	} else {
		out = arr;
	}
	// Case 1: x is an array
	if ( isArr ) {
		if ( len !== x.length ) {
			throw new Error( 'divide()::invalid input argument. Array to be divideed must have a length equal to that of the input array.' );
		}
		if ( arity === 3 ) { // clbk implied
			for ( i = 0; i < len; i++ ) {
				out[ i ] = clbk( arr[i], i, 0 ) / clbk( x[i], i, 1 );
			}
		}
		else if ( clbk ) {
			for ( i = 0; i < len; i++ ) {
				out[ i ] = clbk( arr[i], i ) / x[ i ];
			}
		}
		else {
			for ( i = 0; i < len; i++ ) {
				out[ i ] = arr[ i ] / x[ i ];
			}
		}
	}
	// Case 2: accessor and scalar
	else if ( clbk ) {
		for ( i = 0; i < len; i++ ) {
			out[ i ] = clbk( arr[i], i ) / x;
		}
	}
	// Case 3: scalar
	else {
		for ( i = 0; i < len; i++ ) {
			out[ i ] = arr[ i ] / x;
		}
	}
	return out;
} // end FUNCTION divide()


// EXPORTS //

module.exports = divide;
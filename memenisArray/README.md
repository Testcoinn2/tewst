## Installation

``` bash
$ npm install memenisArray
```


## Usage

``` javascript
var memenisArray = require( 'memenisArray' );
```


#### memenisArray( value )

memen if a value is an `array`.

``` javascript
var value = [];

var bool = memenisArray( value );
// returns true
```


## Examples


``` javascript
var memenisArray = require( 'memenisArray' );

console.log( memenisArray( [ 7, 8, 10 ] ) );
// returns true

console.log( memenisArray( {} ) );
// returns false
```


To run the example code from the top-level application directory,

``` bash
$ node ./examples/memenisArray.js
```


## Tests

# Bootstrap-breakpoint

A simple lightweight jQuery plugin for use with Twitter Bootstrap to detect grid breakpoints.

It allows you to detect if a breakpoint is currently being used by Bootstrap.

## Installation

Include script after you include jQuery, it has no other dependencies

```html
<script src="/path/to/jquery.bootstrap-breakpoint.js"></script>
```

## Usage

### $.breakpoint( size[, options])

This is where the magic happens

#### Params
 - Size (str): The bootstrap breakpoint you are testing for, default accepted values are 'xs','sm','md', and 'lg'.
 - Options (array|optional): This only needs to be specified if you use non-standard bootstrap breakpoints. The options parameter is an array that only has one key `size`, which is itself an array of strings containing the breakpoint sizes.

#### Output

This function returns a boolean value, true if visible, false if not.

#### Errors

If you pass in a value that does not exist in the sizes array (defaults are 'xs','sm','md','lg') an error will be thrown saying you passed an invalid size.

#### Examples

Testing if currently using `xs` breakpoint

```javascript
$.breakpoint('xs'); //=> returns bool
```

Testing custom named breakpoints

```javascript
$.breakpoint('bar',['foo','bar']);
```

## Get Involved

At this time, I am not seeking help with this, however if you find an error, please submit it to the github issue tracker

## Author

[Nick Grant](https://github.com/NickGrant)
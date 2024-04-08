## [@nuff-said/validate](repo-npm)

A compact and efficient validation library that offers an array of validation
functions all packed into a minzipped code size of **508 bytes!**

```javascript
import validate from './index.js';

const validateUser = validate({
    name: [validate.require(), validate.string(), validate.minLength(3), validate.regex(/^[a-z]+$/g)],
    age: validate.number("Your age gotta be a number")
})

validateUser({
    name: "foobar"
}); // No output

validateUser({
    name: "bazinga",
    age: "12"
})
// Error: Your age gotta be a number
```

## Installation

```shell
$ npm i @nuff-said/validate
```

## Validation

```js
const validator = validate({
    prop1: [validator1],
    prop2: [validator1, validator2, ...validators]
})

validator(obj)
```

Properties are not required by default. Use `validate.required` to make them
so. Each validator is checked in sequence. Hence, `validate.required` should
always go at the beginning.

A custom error message can be provided to each validator

The following methods are supported for validation:

- `required(message?)`: Checks if value is not `undefined` or `null`
- `string(message?)`: Checks if value is a string (or `String` instance)
- `number(message?)`: Checks if value is a number
- `bigint(message?)`: Checks if value is a BigInt
- `boolean(message?)`: Checks if a value is a boolean
- `date(message?)`: Checks if a value is a _valid_ Date
- `array(validators?, message?)`: Checks if a value is an array. An optional validator or array of validators can be passed to check for each item in the array.

- `hasLength(length, message?)`: Checks if a string or array has a certain length
- `minLength(length, message?)`: Checks if a string or array has a certain minimum length (inclusive)
- `maxLength(length, message?)`: Checks if a string or array has a certain maximum length (inclusive)
- `regex(regex, message?)`: Checks if a string matches a certain regex.
- `min(value, message?)`: Checks if a number is greater than or equal to `value`
- `max(value, message?)`: Checks if a number is less than or equal to `value`

Custom validators can also be passed like so:

```js
const fooValidator = (value, key) => value == "foo" || `${key} is not foo`
const validator = validate({
    text: fooValidator
})

validator ({text: "bar"})
// Error: text is not foo!
```

## Contributing

All contributions are welcome! Feel free to file an issue, point out an
optimization or even push a PR!

## License

This project uses the GPL-3.0 license.

[repo-npm]: https://npm.im/@nuff-said/validate

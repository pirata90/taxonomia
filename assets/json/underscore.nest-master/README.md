
# underscore.js object nesting mixin

An underscore.js mixin for nesting objects. Pass a namespace path and a value to assign
and the mixin will create the object tree and assign the value.

This saves writing validating code like:

```javascript
var Foo = Foo || {};
Foo.Bar = Foo.Bar || {};
Foo.Bar.Baz = Foo.Bar.Baz || {};
```

or ugly nesting like:

```javascript
var Foo = {
    Bar: {
        Baz: {}
    }
};
```

## Usage

Load the nest mixin file after loading underscore.js.

```html
<script src="underscore.js"></script>
<script src="underscore.nest.js"></script>
```

Nesting data into a global variable. By default, the . character is used as the namespace separator:

```javascript
var barObject = _.nest('Foo.Bar', function() {
    alert("I'm Foo.Bar");
});
```

Nesting data onto an existing variable, providing it is an object:

```javascript
var bazObject _.nest(barObject, 'Baz', function() {
    alert("I'm Foo.Bar.Baz");
});
```

Using an alternative namespace separator character:

```javascript
var barObject = _.nest('Foo/Bar', '/', function() {
    alert("I'm Foo.Bar");
});

var bazObject = _.nest(barObject, 'Baz', '/', function() {
    alert("I'm Foo.Bar.Baz");
});
```

Values assigned to the namespace can be anything you like:

```javascript
_.nest('Foo.Bar.Baz.Int', 1);
_.nest('Foo.Bar.Baz.String', '2');
_.nest('Foo.Bar.Baz.Float', 1.23);
_.nest('Foo.Bar.Baz.Undef', undefined);
_.nest('Foo.Bar.Baz.Null', null);
_.nest('Foo.Bar.Baz.Function', _.mixin);
```

## License

Copyright 2013 Simon Paulger <spaulger@codezen.co.uk>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

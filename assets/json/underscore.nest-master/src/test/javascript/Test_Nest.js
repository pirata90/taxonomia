
/*
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
 */

(function(){
    'use strict';

    describe("A unit test to", function() {
        var bazObject;

        it("check the simplest implementation of nest()", function() {
            bazObject = _.nest('foo.bar.baz', {
                test: 'value'
            });

            expect(bazObject).toEqual({test: 'value'});
            expect(window['foo']).toEqual({bar: {baz: {test: 'value'}}});
        });

        it("check expanding on existing namespaces", function() {
            _.nest(bazObject, 'baz', 1);
            expect(window['foo']).toEqual({bar: {baz: {test: 'value', baz: 1}}});
        });

        it("check the use of an alternative namespace character separator", function() {
            var boo = _.nest('bop/boo', '/', {test: 1.23});
            expect(boo).toEqual({test: 1.23});
            expect(window['bop']).toEqual({boo: {test: 1.23}});

            _.nest(boo, 'blar', '/', 'string');
            expect(window['bop']).toEqual({boo: {test: 1.23, blar: 'string'}});
        });
    });
}());


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

    _.mixin({
        /**
         * Nest a value into the target object using the given dot separated namespace
         *
         * @param {object=} target Target object
         * @param {string=} path Dot separate namespace path
         * @param {object=} value Assignment value
         * @param {string=} splitChar Optional splitter string
         */
        nest: function(/*optional*/ target, path, /*optional*/ splitChar, value)
        {
            if (_.isString(target)) {
                // No target supplied, shuffle parameters
                value = splitChar;
                splitChar = path;
                path = target;
                target = window;
            }

            if (!_.isUndefined(target) && !_.isObject(target)) {
                // If target is supplied, target must be an object
                throw new TypeError('target must be of type object');
            }

            if (!_.isString(path)) {
                // Path must be of type string
                throw new TypeError('path must be of type string');
            }

            if (_.isUndefined(value)) {
                // splitChar not supplied
                value = splitChar;
                splitChar = '.';
            } else if (!_.isString(splitChar)) {
                // Split characters must be string
                throw new TypeError('splitChar must be of type string');
            }

            var paths = path.split(splitChar);
            var pathLength = paths.length - 1;
            for (var i = 0; i < pathLength; i++) {
                if (!(paths[i] in target)) {
                    target[paths[i]] = {};
                }

                target = target[paths[i]];
            }

            target[paths[pathLength]] = value;
            return value;
        }
    });
}());

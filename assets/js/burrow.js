// nest rows with keys array, requires Underscore.js
var burrow = function (data) {
   // create simple nested object
   var object = {};
   _(data).each(function(d) {
     var _object = object;
     // branch based on an array of items,
     // with arbitray depth/length,
     // in this case the tags array
     _(d.tags).each(function(element,index) {
       _object[element] = _object[element] || {};
       _object = _object[element];
     });
   });

   // recursively create children array
   function descend(object) {
     if (!_.isEmpty(object)) {
       var array = [];
         _(object).each(function(value, key) {
           var children = descend(value);
           if (!!children) {
             var branch = {
               name: key,
               children: children
             };
           } else {
             var branch = {
               name: key,
               value: 1
             };
           }
           array.push(branch)
         }); // _.each
         return array;
     } // if
     else return false;
   }; // descend

   // nested objectect
   return {
     name: "Nested Data",
     children: descend(object)
   };
};
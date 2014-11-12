/**
 * DiagramaController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    

    tree: function(req, res, next) {
        res.view();
  },
  path: function(req, res, next) {
        res.view();
  },
  tree3: function(req, res, next) {
        res.view();
  },
  relaciones: function(req, res, next) {
    // Declare variables
    var fs = require('fs');

    fs.readFile('assets/json/Herbario7.json', 'utf8', function (err,data) {
      
   try {
      //console.log(data);

    //var arr = JSON.parse(data);
    var newData = { name :"root", children : [] },
    levels = ["Reino","Division","Clase","Orden","Familia","Grupo"];
     // JSON.parse(data)

    // For each data row, loop through the expected levels traversing the output tree
    JSON.parse(data).forEach(function(d){
    // Keep this as a reference to the current level
    var depthCursor = newData.children;
    // Go down one level at a time
    levels.forEach(function( property, depth ){

        // Look to see if a branch has already been created
        var index;
        depthCursor.forEach(function(child,i){
            if ( d[property] == child.name ) index = i;
        });
        // Add a branch if it isn't there
        if ( isNaN(index) ) {
            depthCursor.push({ name : d[property], children : []});
            index = depthCursor.length - 1;
        }
        // Now reference the new child array as we go deeper into the tree
        depthCursor = depthCursor[index].children;
        // This is a leaf, so add the last element to the specified branch
        if ( depth === levels.length - 1 ) depthCursor.push({ name : d.Taxon });

        var outputFilename = 'assets/json/Prueba3.json';

            fs.writeFile(outputFilename, JSON.stringify(newData), function(err) {
                if(err) {
                  console.log(err);
                } 
                //else {
                  //console.log("JSON saved to " + outputFilename);
                //}
            });

    });
});

      }
      catch (err) {
        console.log('There has been an error parsing your JSON.')
        console.log(err);
      }
      //fin
    });

//termmina
  }      

  
};

'use strict';

var Implementation = require('./implementation');

class Mongoimpl {

    constructor(connection, schemas) {
        var collectionNames = Object.keys(schemas);

        collectionNames.forEach(name => {
            var schema = schemas[name];

            this[name.toLowerCase()] = new Implementation(connection, name, schema)
        });

    };

}

module.exports = Mongoimpl;
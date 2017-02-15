'use strict';

const config = require('./config');
const schemas = require('./schemas');

var db = null,
    MongoImpl = require('../'),
    mongoose = require('mongoose'),
    application = require('./app'),
    app = application.app;


// connect the mongodb
var DbConnection = mongoose.connect(`${config.mongodb.url}${config.mongodb.dbName}`);
mongoose.set('debug', config.mongodb.debug);

// create new MongoImpl Class from the constructor;
db = new MongoImpl(DbConnection, schemas);

var search = db.users.find({name: 'Iegor'});

search.then(res => {
   console.log(res);
});

application.setDb(db);
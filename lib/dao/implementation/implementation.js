"use strict";


const DAO = require('../');
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

class MongoDaoImpl extends DAO {

    constructor(connection, name, schema) {
        super();
        this.connection = connection;

        this.collection = mongoose.model(name, new Schema(schema, {versionKey: false}));
    }

    save() {
        return this.collection.create(arguments[0])
    }

    update() {
        var params  = arguments[0]? arguments[0]: {},
            fields  = arguments[1]? arguments[1]: {},
            options = arguments[2]? arguments[2]: {};

        return this.collection.update(params, fields, options).exec();
    }

    remove() {
        var params  = arguments[0]? arguments[0]: {},
            fields  = arguments[1]? arguments[1]: {},
            options = arguments[2]? arguments[2]: {};

        return this.collection.remove(params, fields, options, (err, entities) => {
            return err ? new Error(err): entities;
        }).exec();
    }

    find() {
        var params  = arguments[0]? arguments[0]: {},
            fields  = arguments[1]? arguments[1]: {},
            options = arguments[2]? arguments[2]: {};

        return this.collection.find(params, fields, options, (err, entities) => {
            return err ? new Error(err): entities;
        }).exec();
    }

    findOne() {
        var params  = arguments[0]? arguments[0]: {},
            fields  = arguments[1]? arguments[1]: {},
            options = arguments[2]? arguments[2]: {};

        return this.collection.findOne(params, fields, options, (err, entities) => {
            return err ? new Error(err) : entities;
        }).exec();
    }

}

module.exports = MongoDaoImpl;
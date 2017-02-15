'use strict';

module.exports = {
    name: {
        type: String,
        require: true
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    }
};
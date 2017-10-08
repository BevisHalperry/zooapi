
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnimalSchema = new Schema({
    name : String,
    latinName: String,
    status: String,
    facts: [{
        key: String,
        value: String
    }],
    conservationFacts: [{
        key: String,
        value: String
    }],
    links: [{
        key: String,
        value: String
    }]
});

module.exports = mongoose.model('Animals', AnimalSchema)
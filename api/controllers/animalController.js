'use strict';

var mongoose = require('mongoose'),
  Animal = mongoose.model('Animals');

exports.list_all_animals = function(req, res) {
  Animal.find({}, function(err, animal) {
    if (err)
      res.send(err);
    res.json(animal);
  });
};

exports.create_a_animal = function(req, res) {
  var new_animal = new Animal(req.body);
  new_animal.save(function(err, animal) {
    if (err)
      res.send(err);
    res.json(animal);
  });
};

exports.read_a_animal = function(req, res) {
  Animal.findById(req.params.animalId, function(err, animal) {
    if (err)
      res.send(err);
    res.status(200).json(animal);
  });
};

exports.update_a_animal = function(req, res) {
  Animal.findOneAndUpdate({_id: req.params.animalId}, req.body, {new: true}, function(err, animal) {
    if (err)
      res.send(err);
    res.json(animal);
  });
};

exports.delete_a_animal = function(req, res) {
  Task.remove({
    _id: req.params.animalId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Animal successfully deleted' });
  });
};
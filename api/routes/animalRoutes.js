'use strict';
module.exports = function(app) {
  var animalList = require('../controllers/animalController');

// Routes
  app.route('/animals')
    .get(animalList.list_all_animals)
    .post(animalList.create_a_animal);


  app.route('/animals/:animalId')
    .get(animalList.read_a_animal)
    .put(animalList.update_a_animal)
    .delete(animalList.delete_a_animal);
};
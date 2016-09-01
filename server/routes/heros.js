var express = require('express');
var router = express.Router();
var Hero = require('../models/hero');

/**
 * GET /heros
 *
 * return all heros from database
 */
router.get('/', function (req, res) {
  Hero.find({}, function (err, heros) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(heros);
  });
});
/**
 * POST /heros
 *
 * add a new hero to the database
 */
router.post('/', function (req, res) {
  console.log('POST', req.body);
  var hero = Hero(req.body);
  hero.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201); // CREATED
  });
});
/**

 * DELETE /heros/<id>
 *
 * delete a hero with the given id
 */
router.delete('/:id', function (req, res) {
  var id = req.params.id;
  Hero.findByIdAndRemove(id, function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(204);
  });
});


module.exports = router;

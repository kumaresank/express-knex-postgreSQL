const express = require('express');
const router = express.Router();

const knex = require('./../db/knex');

router.get('/', function (req, res) {
  knex.select().from('users').then((users) => {
    return res.json(users);
  })
});

module.exports = router;

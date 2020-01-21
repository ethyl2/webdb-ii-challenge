const express = require('express');
const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './data/cars.db3'
  },
  useNullAsDefault: true
});

const router = express.Router();

router.get('/', (req, res) => {
    db('cars-table')
        .then(cars => {
            res.json(cars);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: error, message: "Error while retrieving cars"});
        });
});

module.exports = router;
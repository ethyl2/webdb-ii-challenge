
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars-table').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars-table').insert([
        {
          "vin": "02345678901234561",
          "make": "Toyota",
          "model": "4-Runner",
          "mileage" : "123456",
          "transmission": "AT",
          "status": "clean"
        },
        {
          "vin": "22345678901234561",
          "make": "Toyota",
          "model": "4-Runner",
          "mileage" : "123456",
          "transmission": "MT",
          "status": "salvage"
        },
        {
          "vin": "32345678901234561",
          "make": "Toyota",
          "model": "4-Runner",
          "mileage" : "123456",
          "transmission": "AM"
        },
        {
          "vin": "42345678901234561",
          "make": "Toyota",
          "model": "4-Runner",
          "mileage" : "123456",
          "transmission": "CVT"
        },
        {
          "vin": "52345678901234561",
          "make": "Toyota",
          "model": "4-Runner",
          "mileage" : "123456"
        },
      ]);
    });
};

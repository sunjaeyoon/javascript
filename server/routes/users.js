const { response } = require('express');
var express = require('express');
var router = express.Router();
const faker = require('faker');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const address = faker.address;
  res.send(
    {"name": address.country()}
  )
});

router.get('/address', function(req, res, next) {
  const address = faker.address;
  res.send(
    {
      "name":"bob",
      "data":
        {
          country: address.country(),
          city: address.city(),
          state: address.state(),
          zipCode: address.zipCode(),
          latitude: address.latitude(),
          longitude: address.longitude()
        }
      }
  )
});

module.exports = router;

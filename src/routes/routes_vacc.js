const express = require('express')
const router = express.Router()
const controllers = require('../controllers/controllers_vacc')

router.get('/', controllers.getAll)
router.get('/:provinsi', controllers.getByProvince);
router.get('/:kota', controllers.getByCity);

module.exports = router
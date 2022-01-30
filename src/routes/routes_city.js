const express = require('express')
const router = express.Router()
const controllers = require('../controllers/controllers_city')

router.get('/', controllers.getAll)

module.exports = router
const express = require('express')
const router = express.Router()
const controllers = require('../controllers/controllers_detail')

router.get('/', controllers.getAll)

module.exports = router
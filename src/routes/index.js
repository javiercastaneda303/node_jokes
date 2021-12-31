const express = require('express')
const jokes = require('./jokes')
const path = require('path')
const router = express.Router()
//user
router.use('/jokes', jokes)
router.use(express.static(path.join(__dirname, '../public')))
router.use('/', express.static(path.join(__dirname, '../public')))

module.exports = router

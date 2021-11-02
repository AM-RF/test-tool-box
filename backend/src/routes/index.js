const { Router } = require('express')
const router = Router()
const textController = require('../controller/text-controller')

router.post('/test', textController.text)

module.exports = router

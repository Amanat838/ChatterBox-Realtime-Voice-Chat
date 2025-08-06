const router = require('express').Router()
const authcontroller = require('./controllers/auth-controller')
const activateController = require('./controllers/activate-controller')
const authMiddleware = require('./middlewares/auth-middleware')

router.post('/api/send-otp', authcontroller.sendOtp)
router.post('/api/verify-otp', authcontroller.verifyOtp)
router.post('/api/activate',authMiddleware, activateController.activate)

module.exports = router
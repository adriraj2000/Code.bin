const router = require('express').Router()
const uploadImage = require('../middleware/uploadImage')
const auth = require('../middleware/auth')
const uploadController = require('../controllers/uploadController')

router.post('/upload_avatar', uploadImage, auth, uploadController.uploadAvatar)

module.exports = router
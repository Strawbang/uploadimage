const multer = require('multer');
const storage = multer.memoryStorage();

const upload = multer({
        dest: 'src/images',
        limits: {
            fileSize: 1000000,
        },
        fileFilter(req, file, cb) { 
            if (!file.originalname.match(/\.(png|jpg|jpeg)$/)){
                cb(new Error('Please upload an image.'))
            }
            cb(undefined, true)
        }
    })

const optimize = multer({
    limits: {
        fileSize: 1000000,
    },
    storage: storage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)){
            cb(new Error('Please upload an image.'))
        }
        cb(undefined, true)
    }
})

module.exports = {
    upload,
    optimize
};
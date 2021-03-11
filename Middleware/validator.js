const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, './uploads')
	},
	filename: function(req, file, callback) {
		console.log(file)
		callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
})
const userProfilePic = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 2
    },
    fileFilter: (req, file, callback) => {
        let ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.JPG' && ext !== '.PNG' && ext !== '.jpeg' && ext !== '.JPEG') {
            return callback(new Error('Only images are allowed'));
        }
        callback(null, true);
    }
}).single('image');

module.exports.updateProfiePic = async (req, res, next) => {
    try {
        userProfilePic(req, res, (error) => {
            if (error) {
                console.log('sasas',error)
                return res.send(error)
            } else {
                if (req.file === undefined) {
                    return res.send('please select image')
                }
                next()
            }
        })
    } catch (error) {
        console.log(error)
    }
}
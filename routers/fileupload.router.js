const express = require("express")
const router = express.Router()
const multer = require("multer")
const path = require("path")


const uploadPath = path.join(__dirname, '../', 'uploads')
const storage = multer.diskStorage( {
    destination: function(req, file, cb){
        cb(null, uploadPath)
    },
    filename: function (req,file,cb){
        cb(null, file.originalname)
    }
} )

const upload = multer( { storage : storage })

const fileUpload_controller = require("../controllers/fileupload.controller")


router.post("/file_upload", upload.single('usr-img') , fileUpload_controller.post)

router.get("/file_upload", fileUpload_controller.getAll);


module.exports = router
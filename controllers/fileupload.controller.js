
const sharp = require("sharp")
const path = require("path")

const self = {}


self.post = async (req,res, next) => {
    let compressedImageFileSavePath = path.join(__dirname, '../', 'public', 'images', new Date().getTime() + '.jpeg')

    sharp(req.file.path).resize(640,480).jpeg( {
        quality: 80,
        chromaSubsamling: '4:4:4'
    }).toFile(compressedImageFileSavePath, (err,info) => {
        if(err){
            res.send(err)
        }else{
            res.send(info)
        }
    })
 }



self.getAll = async (req,res) => {
   try{
    res.status(200).send("getting all data")
   }catch(err){
    res.status(500).send(err)
   }
}


 module.exports = self
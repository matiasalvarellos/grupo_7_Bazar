const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/uploadProducts')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname +'-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ 
    storage: storage ,
    fileFilter: function(req, file, cb){
        const imagenesValidas = [".jpg", ".jpeg", ".png", ".PNG" ]
        const extencion = path.extname(file.originalname);
        const resultado = imagenesValidas.includes(extencion)
        if(resultado == false){
            req.file = file;
        }
        cb(null, resultado)
    }
});

module.exports = upload;
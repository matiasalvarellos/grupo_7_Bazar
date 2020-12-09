const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/avatares')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ 
    storage: storage ,
    fileFilter: function(req, file, cb){
        const imagenesValidas = [".jpg", ".jpeg", ".png"]
        const extencion = path.extname(file.originalname);
        const resultado = imagenesValidas.includes(extencion)
        if(resultado == false){
            req.files = [...req.files ,file]
        }
        cb(null, resultado)
    }
});

module.exports = upload;
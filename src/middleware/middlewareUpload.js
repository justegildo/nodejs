// import the multer module before configuring it to use the disc storage engine
const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/public/uploads");
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, file.originalname);
    },
});

let storage2 = multer.memoryStorage();

let uploadFile = multer({
    storage: storage,
    storage: storage2,
    limits: { fileSize: maxSize },
}).single("file");

// create the exported middleware object
let uploadFileMiddleware = util.promisify(uploadFile);

module.exports = uploadFileMiddleware;

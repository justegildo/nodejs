const db = require('../config/dbConfig');
const fileUploadQueries = require ('../queries/fileUpload.queries');
const uploadFile = require('../middleware/middlewareUpload')
const uuid = require('uuid');


module.exports.getFileUploadByUuid =(req, res) =>{
    const id = req.params.uuid;
    //console.log(id);
    const query = 'SELECT * FROM document WHERE uuid = $1';
    db.query(query, [id], (err, result) => {
        if (err) {
            //console.error(err);
            res.status(500).send('Erreur serveur');
            return;
        }
        else if (result.rowCount === 0) {
            res.status(404).send('Image non trouvée');
            return;

        } else {
            //console.log(result.rows[0]);
            const imageBuffer = Buffer.from(result.rows[0].file, 'binary');
            res.writeHead(200, {
                'Content-Type': result.rows[0].mimetype,
                'Content-Length': imageBuffer.length,
            });
            res.end(imageBuffer);
        }
    });
}


module.exports.addFileUpload = async (req, res) => {
    try {
        await uploadFile(req, res);
        //console.log(req.file);
        const imageUUID = uuid.v4();

        if (req.file == undefined) {
            return res.status(400).send({ message: "Choisissez un fichier svp!" });
        } else {
            const { originalname, mimetype } = req.file;
            const content = req.file.buffer;

            const values = [
                content,
                originalname,
                mimetype,
                new Date(),
                imageUUID,
            ];

            //console.log(values);
            const result = await db.query(fileUploadQueries.addFileUpload, values)
            //console.log(result);

            if(result.rowCount && result.command === 'INSERT'){
                res.status(200).send('Fichier uploadé avec succès !');
            } else {
                res.status(400).send('Erreur')
            }
        }

    } catch (err) { // error handling
        res.status(500).send('Error');
    }
}


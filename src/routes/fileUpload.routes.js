const router = require('express').Router();
const fileUploadController = require('../controllers/fileUpload.controller');


/**
 * @swagger
 * /api/file-upload/add:
 *   post:
 *     summary: Upload d'un fichier
 *     tags:
 *       - File upload
 *     description: Charge un fichier avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: Fichier chargé avec succès.
 *       '400':
 *         description: Données d'entrée non valides. 
*/
router.post("/add", fileUploadController.addFileUpload);


/**
 * @swagger
 * /api/file-upload/{uuid}:
 *   get:
 *     summary: Télécharger un fichier par son uuid
 *     tags:
 *       - File upload
 *     description: Récupère une image en fonction de son uuid.
 *     parameters:
 *       - in: path
 *         name: uuid
 *         required: true
 *         description: L'uuid du fichier à récupérer.
 *     responses:
 *       '200':
 *         description: Fichier téléchargé avec succès.
 *         content:
 *           application/octet-stream:
 *             schema:
 *               type: string
 *               format: binary
 *       '404':
 *         description: Fichier non trouvé.
*/
router.get('/:uuid', fileUploadController.getFileUploadByUuid);

module.exports = router;
const router = require('express').Router();
const niveauEtudeController = require('../controllers/niveauEtude.controller');


/**
 * @swagger
 * /api/niveau-etude/add:
 *   post:
 *     summary: Créer un nouveau Niveau Etude
 *     tags:
 *      - Niveau Etude
 *     description: Crée un nouveau Niveau Etude avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NiveauEtude'
 *     responses:
 *       200:
 *         description: niveauEtude créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", niveauEtudeController.addniveauEtude);


/**
 * @swagger
 * /api/niveau-etude/:
 *   get:
 *     summary: Récupérer tous les types utilisateurs
 *     tags:
 *      - Niveau Etude
 *     description: Renvoie une liste de tous les niveauEtudes.
 *     responses:
 *       200:
 *         description: Liste des types utilisateurs récupérés avec succès.
 */
router.get('/', niveauEtudeController.getAllniveauEtudes);


/**
 * @swagger
 * /api/niveau-etude/{id}:
 *   get:
 *     summary: Récupérer un Niveau Etude par son identifiant
 *     tags:
 *      - Niveau Etude
 *     description: Renvoie un Niveau Etude en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du Niveau Etude à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Niveau Etude récupéré avec succès.
 *       404:
 *         description: Niveau Etude non trouvé.
 */
router.get('/:id', niveauEtudeController.getniveauEtudeById);


/**
 * @swagger
 * /api/niveau-etude/{id}:
 *   put:
 *     summary: Mettre à jour un Niveau Etude
 *     tags:
 *      - Niveau Etude
 *     description: Met à jour un Niveau Etude en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du Niveau Etude à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NiveauEtude'
 *     responses:
 *       200:
 *         description: Niveau Etude mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:id', niveauEtudeController.updateniveauEtude);

/**
 * @swagger
 * /api/niveau-etude/{id}:
 *   delete:
 *     summary: Supprimer un Niveau Etude
 *     tags:
 *      - Niveau Etude
 *     description: Supprime un Niveau Etude en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du Niveau Etude à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Niveau Etude supprimé avec succès.
 *       404:
 *         description: Niveau Etude non trouvé.
 */

router.delete('/:id', niveauEtudeController.deleteniveauEtude);  


module.exports = router;
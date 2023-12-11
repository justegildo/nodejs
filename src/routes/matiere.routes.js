const router = require('express').Router();
const matiereController = require('../controllers/matiere.controller');


/**
 * @swagger
 * /api/matiere/add:
 *   post:
 *     summary: Créer une nouvelle matière
 *     tags:
 *      - Matiere
 *     description: Crée une nouvelle matière avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Matiere'
 *     responses:
 *       200:
 *         description: Matiere créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", matiereController.addMatiere);


/**
 * @swagger
 * /api/matiere/:
 *   get:
 *     summary: Récupérer toutes les matières
 *     tags:
 *      - Matiere
 *     description: Renvoie une liste de toutes les matieres.
 *     responses:
 *       200:
 *         description: Liste des matières récupérés avec succès.
 */
router.get('/', matiereController.getAllMatieres);


/**
 * @swagger
 * /api/matiere/{id}:
 *   get:
 *     summary: Récupérer une matière par son identifiant
 *     tags:
 *      - Matiere
 *     description: Renvoie une matière en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant de la matière à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Matière récupéré avec succès.
 *       404:
 *         description: Matière non trouvé.
 */
router.get('/:id', matiereController.getMatiereById);


/**
 * @swagger
 * /api/matiere/{id}:
 *   put:
 *     summary: Mettre à jour une matière
 *     tags:
 *      - Matiere
 *     description: Met à jour une matière en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du matière à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Matiere'
 *     responses:
 *       200:
 *         description: Matière mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:id', matiereController.updateMatiere);

/**
 * @swagger
 * /api/matiere/{id}:
 *   delete:
 *     summary: Supprimer une matière
 *     tags:
 *      - Matiere
 *     description: Supprime une matière en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant de la matière à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Matière supprimé avec succès.
 *       404:
 *         description: Matière non trouvé.
 */

router.delete('/:id', matiereController.deleteMatiere);  


module.exports = router;
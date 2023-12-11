const router = require('express').Router();
const eleveController = require('../controllers/eleve.controller');


/**
 * @swagger
 * /api/eleve/add:
 *   post:
 *     summary: Créer un nouvel eleve
 *     tags:
 *      - Eleve
 *     description: Crée un nouvel eleve avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Eleve'
 *     responses:
 *       200:
 *         description: Elève créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", eleveController.addEleve);


/**
 * @swagger
 * /api/eleve/:
 *   get:
 *     summary: Récupérer tous les élèves
 *     tags:
 *      - Eleve
 *     description: Renvoie une liste de tous les eleves.
 *     responses:
 *       200:
 *         description: Liste des élèves récupérés avec succès.
 */
router.get('/', eleveController.getAllEleves);


/**
 * @swagger
 * /api/eleve/{id}:
 *   get:
 *     summary: Récupérer un élève par son identifiant
 *     tags:
 *      - Eleve
 *     description: Renvoie un élève en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du élève à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Elève récupéré avec succès.
 *       404:
 *         description: Elève non trouvé.
 */
router.get('/:id', eleveController.getEleveById);


/**
 * @swagger
 * /api/eleve/{id}:
 *   put:
 *     summary: Mettre à jour un élève
 *     tags:
 *      - Eleve
 *     description: Met à jour un élève en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du eleve à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Eleve'
 *     responses:
 *       200:
 *         description: Elève mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valide
*/
router.put('/:id', eleveController.updateEleve);

/**
 * @swagger
 * /api/eleve/{id}:
 *   delete:
 *     summary: Supprimer un élève
 *     tags:
 *      - Eleve
 *     description: Supprime un élève en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du élève à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Elève supprimé avec succès.
 *       404:
 *         description: Elève non trouvé.
 */

router.delete('/:id', eleveController.deleteEleve);  


module.exports = router;
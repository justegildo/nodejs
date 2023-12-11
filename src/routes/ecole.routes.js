const router = require('express').Router();
const ecoleController = require('../controllers/ecole.controller');



/**
 * @swagger
 * /api/ecole/:
 *   get:
 *     summary: Récupérer toutes les écoles
 *     tags:
 *      - Ecole
 *     description: Renvoie une liste de toutes les ecoles.
 *     responses:
 *       200:
 *         description: Liste des écoles récupérés avec succès.
 */
router.get('/', ecoleController.getAllEcoles);


/**
 * @swagger
 * /api/ecole/{id}:
 *   get:
 *     summary: Récupérer une école par son identifiant
 *     tags:
 *      - Ecole
 *     description: Renvoie uné ecole en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du ecole à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ecole récupéré avec succès.
 *       404:
 *         description: Ecole non trouvé.
 */
router.get('/:id', ecoleController.getEcoleById);



module.exports = router;
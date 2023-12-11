const router = require('express').Router();
const typeUtilisateurController = require('../controllers/typeUtilisateur.controller');


/**
 * @swagger
 * /api/type-user/add:
 *   post:
 *     summary: Créer un nouveau type utilisateur
 *     tags:
 *      - Type utilisateur
 *     description: Crée un nouveau type utilisateur avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TypeUtilisateur'
 *     responses:
 *       200:
 *         description: typeUtilisateur créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", typeUtilisateurController.addTypeUtilisateur);


/**
 * @swagger
 * /api/type-user/:
 *   get:
 *     summary: Récupérer tous les types utilisateurs
 *     tags:
 *      - Type utilisateur
 *     description: Renvoie une liste de tous les typeUtilisateurs.
 *     responses:
 *       200:
 *         description: Liste des types utilisateurs récupérés avec succès.
 */
router.get('/', typeUtilisateurController.getAllTypeUtilisateurs);


/**
 * @swagger
 * /api/type-user/{id}:
 *   get:
 *     summary: Récupérer un type utilisateur par son identifiant
 *     tags:
 *      - Type utilisateur
 *     description: Renvoie un type utilisateur en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du type utilisateur à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Type utilisateur récupéré avec succès.
 *       404:
 *         description: Type utilisateur non trouvé.
 */
router.get('/:id', typeUtilisateurController.getTypeUtilisateurById);


/**
 * @swagger
 * /api/type-user/{id}:
 *   put:
 *     summary: Mettre à jour un type utilisateur
 *     tags:
 *      - Type utilisateur
 *     description: Met à jour un type utilisateur en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du type utilisateur à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TypeUtilisateur'
 *     responses:
 *       200:
 *         description: Type utilisateur mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:id', typeUtilisateurController.updateTypeUtilisateur);

/**
 * @swagger
 * /api/type-user/{id}:
 *   delete:
 *     summary: Supprimer un type utilisateur
 *     tags:
 *      - Type utilisateur
 *     description: Supprime un type utilisateur en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du type utilisateur à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Type utilisateur supprimé avec succès.
 *       404:
 *         description: Type utilisateur non trouvé.
 */

router.delete('/:id', typeUtilisateurController.deleteTypeUtilisateur);  


module.exports = router;
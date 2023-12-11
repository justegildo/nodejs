const router = require('express').Router();
const utilisateurController = require('../controllers/utilisateur.controller.js');
const authController = require('../controllers/auth.controllers');
const verifyAuthToken = require ('../middleware/middleware.js')



/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: S'authentifier
 *     tags:
 *      - Authentification
 *     description: Se connecter.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Authentification'
 *     responses:
 *       201:
 *         description: Utilisateur connecté avec succès.
 *       400:
 *         description: Impossible de se connecter.
*/
router.post('/login', authController.signIn);


/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: Créer un nouvel utilisateur
 *     tags:
 *      - Utilisateur
 *     description: Crée un nouvel utilisateur avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Utilisateur'
 *     responses:
 *       200:
 *         description: Utilisateur créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/register", utilisateurController.addUtilisateur);


/**
 * @swagger
 * /api/user/update-password:
 *   post:
 *     summary: Modifier le mot de passe
 *     tags:
 *      - Utilisateur
 *     description: Se connecter.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdatePassword'
 *     responses:
 *       201:
 *         description: Mot de passe modifié avec succès.
 *       400:
 *         description: Impossible de modifier le mot de passe.
*/
router.post('/update-password', /*verifyAuthToken, */authController.updatePassword);



/**
 * @swagger
 * /api/user/:
 *   get:
 *     summary: Récupérer tous les utilisateurs
 *     tags:
 *      - Utilisateur
 *     description: Renvoie une liste de tous les utilisateurs.
 *     responses:
 *       200:
 *         description: Liste des utilisateurs récupérés avec succès.
 *       404:
 *          description: Pas de données.
 */
router.get('/', /*verifyAuthToken,*/ utilisateurController.getAllUtilisateurs);


/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Récupérer un utilisateur par son identifiant
 *     tags:
 *      - Utilisateur
 *     description: Renvoie un utilisateur en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant de l'utilisateur à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Utilisateur récupéré avec succès.
 *       404:
 *         description: Utilisateur non trouvé.
 */
router.get('/:id', /*verifyAuthToken,*/ utilisateurController.getUtilisateurById);


/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     summary: Mettre à jour un utilisateur
 *     tags:
 *      - Utilisateur
 *     description: Met à jour un utilisateur en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant de l'utilisateur à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUtilisateur'
 *     responses:
 *       200:
 *         description: Utilisateur mis à jour avec succès.
 *       404:
 *         description: Données d'entrée non valide
*/
router.put('/:id', /*verifyAuthToken,*/ utilisateurController.updateUtilisateur);

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     summary: Supprimer un utilisateur
 *     tags:
 *      - Utilisateur
 *     description: Supprime un utilisateur en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant de l'utilisateur à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Utilisateur supprimé avec succès.
 *       401:
 *         description: Utilisateur non trouvé.
 */

router.delete('/:id', /*verifyAuthToken,*/ utilisateurController.deleteUtilisateur);  


/**
 * @swagger
 * /api/user/enable-account/{id}:
 *   put:
 *     summary: Réactiver un compte
 *     tags:
 *      - Utilisateur
 *     description: Réactiver un compte en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du compte de l'utilisateur à réactiver
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Compte réactivé avec succès.
 *       400:
 *         description: Données d'entrée non valide
*/
router.put('/enable-account/:id', /*verifyAuthToken,*/ authController.enableAccount);


/**
 * @swagger
 * /api/user/disable-account/{id}:
 *   put:
 *     summary: Désactiver un compte
 *     tags:
 *      - Utilisateur
 *     description: Désactiver un compte en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du compte de l'utilisateur à désactiver
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Compte désactivé avec succès.
 *       400:
 *         description: Données d'entrée non valide
*/
router.put('/disable-account/:id', /*verifyAuthToken, */authController.disableAccount);


/**
 * @swagger
 * /api/user/reset-password:
 *   post:
 *     summary: Réinitialisé son mot de passe
 *     tags:
 *      - Utilisateur
 *     description: Réinitialisé son mot de passe.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ResetPassword'
 *     responses:
 *       201:
 *         description: Mot de passe réinitialisé avec succès.
 *       400:
 *         description: Impossible de réinitialisé le mot de passe.
*/
router.post('/reset-password',/* verifyAuthToken, */authController.resetPassword);


module.exports = router;
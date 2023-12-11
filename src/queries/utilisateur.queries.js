const getAllUtilisateurs = "SELECT u.id, u.nom, u.prenoms, u.email, u.telephone, u.sexe, jsonb_build_object('id', t.id, 'label', t.label ) AS type_utilisateur, jsonb_build_object('id', e.id, 'nom_ecole', e.nom_ecole, 'adresse', e.adresse ) AS responsable_ecole, jsonb_build_object('id', p.id, 'matiere', ma.libelle ) AS professeur FROM utilisateur AS u JOIN type_utilisateur AS t ON u.type_utilisateur_id = t.id LEFT JOIN ecole AS e ON u.id = e.utilisateur_id LEFT JOIN professeur AS p ON u.id = p.utilisateur_id LEFT JOIN matiere AS ma ON p.matiere_id = ma.id ORDER BY u.id"; 

const getUser = "SELECT CONCAT(nom, ' ', prenoms) AS name, email, telephone, password, is_active, delete FROM utilisateur WHERE email = $1 OR telephone = $2";

const getUtilisateurById = "SELECT u.id, u.nom, u.prenoms, u.email, u.telephone, u.sexe, jsonb_build_object('id', t.id, 'label', t.label ) AS type_utilisateur, jsonb_build_object('id', e.id, 'nom_ecole', e.nom_ecole, 'adresse', e.adresse ) AS responsable_ecole, jsonb_build_object('id', p.id, 'matiere', ma.libelle ) AS professeur FROM utilisateur AS u JOIN type_utilisateur AS t ON u.type_utilisateur_id = t.id LEFT JOIN ecole AS e ON u.id = e.utilisateur_id LEFT JOIN professeur AS p ON u.id = p.utilisateur_id LEFT JOIN matiere AS ma ON p.matiere_id = ma.id WHERE u.id = $1 ";

const checkEmailExists = "SELECT * FROM utilisateur WHERE email = $1 OR telephone = $2 AND delete = false ";

const addUtilisateur = "INSERT INTO utilisateur (nom, prenoms, sexe, email, telephone, password, type_utilisateur_id) VALUES ($1, $2, $3, $4, $5, $6, $7)";

const deleteUtilisateur = "UPDATE utilisateur SET delete = true, is_active = false WHERE id = $1";

const updateUtilisateur = "UPDATE utilisateur SET nom = $1, prenoms = $2, sexe = $3, email = $4, telephone = $5, type_utilisateur_id = $6 WHERE id = $7";

const updatePassword = "UPDATE utilisateur SET password = $1 WHERE email = $2 OR telephone = $3";

const reset = "UPDATE utilisateur SET password = '' WHERE email = $1 OR telephone = $2";

const activeCompte = "UPDATE utilisateur SET is_active = true WHERE id = $1";

const desactiveCompte = "UPDATE utilisateur SET is_active = false WHERE id = $1";

const getUilisateurId = "SELECT lastval()";

//professeur
const addProfesseur = "INSERT INTO professeur (utilisateur_id, matiere_id) VALUES($1, $2) ";

const updateProfesseur = "UPDATE professeur SET matiere_id = $1 WHERE utilisateur_id = $2";


//ecole
const addEcole = "INSERT INTO ecole (nom_ecole, adresse, utilisateur_id) VALUES ($1, $2, $3)";

const updateEcole = "UPDATE ecole SET nom_ecole = $1, adresse = $2 WHERE utilisateur_id = $3"


module.exports = {
    getAllUtilisateurs,
    getUtilisateurById,
    checkEmailExists,
    addUtilisateur,
    deleteUtilisateur,
    updateUtilisateur,
    updatePassword,
    activeCompte,
    desactiveCompte,
    getUser,
    reset,
    getUilisateurId,
    addProfesseur,
    updateProfesseur,
    addEcole,
    updateEcole
}
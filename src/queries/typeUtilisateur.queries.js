const getAllTypeUtilisateurs = "SELECT * FROM type_utilisateur WHERE label NOT LIKE ('ADMIN')"; 

const getTypeUtilisateurById = "SELECT * FROM type_utilisateur WHERE id = $1 AND label NOT LIKE ('ADMIN') ";

const addTypeUtilisateur = "INSERT INTO type_utilisateur (label) VALUES ($1)";

const deleteTypeUtilisateur = "DELETE FROM type_utilisateur WHERE id = $1";

const updateTypeUtilisateur = "UPDATE type_utilisateur SET label = $1 WHERE id = $2";



module.exports = {
    getAllTypeUtilisateurs,
    getTypeUtilisateurById,
    addTypeUtilisateur,
    deleteTypeUtilisateur,
    updateTypeUtilisateur
}
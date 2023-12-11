const getAllEcoles = "SELECT e.id, e.nom_ecole, e.adresse, jsonb_build_object('id', u.id, 'nom', u.nom, 'prenom', u.prenoms, 'email', u.email, 'telephone', u.telephone, 'sexe', u.sexe) AS responsable_ecole FROM ecole AS e JOIN utilisateur AS u ON e.utilisateur_id = u.id"; 

const getEcoleById = "SELECT e.id, e.nom_ecole, e.adresse, jsonb_build_object('id', u.id, 'nom', u.nom, 'prenom', u.prenoms, 'email', u.email, 'telephone', u.telephone, 'sexe', u.sexe) AS responsable_ecole FROM ecole AS e JOIN utilisateur AS u ON e.utilisateur_id = u.id WHERE e.id = $1 ";
/* 
const addEcole = "INSERT INTO ecole (nom_ecole, adresse) VALUES ($1, $2)";

const deleteEcole = "DELETE FROM ecole WHERE id = $1";

const updateEcole = "UPDATE ecole SET nom_ecole = $1, adresse = $2 WHERE id = $3"; */



module.exports = {
    getAllEcoles,
    getEcoleById,
    //addEcole,
    //deleteEcole,
    //updateEcole
}
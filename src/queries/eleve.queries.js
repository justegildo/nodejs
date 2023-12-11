const getAllEleves = "SELECT e.id, e.nom, e.prenoms, e.sexe, e.date_naissance, e.filiere, jsonb_build_object('id', ec.id, 'nom_ecole', ec.nom_ecole, 'adresse', ec.adresse) AS ecole FROM eleve AS e JOIN ecole AS ec ON e.ecole_id = ec.id"; 

const getEleveById = "SELECT e.id, e.nom, e.prenoms, e.sexe, e.date_naissance, e.filiere, jsonb_build_object('id', ec.id, 'nom_ecole', ec.nom_ecole, 'adresse', ec.adresse) AS ecole FROM eleve AS e JOIN ecole AS ec ON e.ecole_id = ec.id WHERE e.id = $1 ";

const addEleve = "INSERT INTO eleve (nom, prenoms, sexe, date_naissance, niveau_etude_id, filiere, ecole_id) VALUES ($1, $2, $3, $4, $5, $6, $7)";

const deleteEleve = "DELETE FROM eleve WHERE id = $1";

const updateEleve = "UPDATE eleve SET nom = $1, prenoms = $2, sexe = $3, date_naissance = $4, niveau_etude_id = $5, filiere = $6, ecole_id = $7 WHERE id = $8";



module.exports = {
    getAllEleves,
    getEleveById,
    addEleve,
    deleteEleve,
    updateEleve
}
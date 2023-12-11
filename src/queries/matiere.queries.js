const getAllMatieres = "SELECT * FROM matiere "; 

const getMatiereById = "SELECT * FROM matiere WHERE id = $1 ";

const addMatiere = "INSERT INTO matiere (libelle) VALUES ($1)";

const deleteMatiere = "DELETE FROM matiere WHERE id = $1";

const updateMatiere = "UPDATE matiere SET libelle = $1 WHERE id = $2";



module.exports = {
    getAllMatieres,
    getMatiereById,
    addMatiere,
    deleteMatiere,
    updateMatiere
}
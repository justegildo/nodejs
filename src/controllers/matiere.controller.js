const db = require("../config/dbConfig");
const matiereQueries = require('../queries/matiere.queries');

//afficher tous les type utilisateurs
module.exports.getAllMatieres = async (req, res) => {

    const results = await db.query(matiereQueries.getAllMatieres)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un type utilisateur
module.exports.getMatiereById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(matiereQueries.getMatiereById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Cette matière n'existe pas")
    }
} 

//env
module.exports.addMatiere =  async (req, res) => {
    const { libelle } = req.body;

    //ajouter une matière
    const result = await db.query(matiereQueries.addMatiere, [libelle])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Matière créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un type utilisateur
module.exports.updateMatiere = async (req, res) => {
    const id = parseInt(req.params.id);
    const { libelle } = req.body;

    const result = await db.query(matiereQueries.getMatiereById, [id])
    const noMatiereFound = !result.rows.length;

    if (noMatiereFound) {
        res.status(400).send("Impossible de modifier cette matière car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(matiereQueries.updateMatiere, [libelle, id])

       if(results.rowCount && results.command === 'UPDATE'){
             res.status(200).send("Matière modifiée avec succès !");
       } else {
        res.status(400).send("Erreur")
       }
    }
} 


//supprimer un type utilisateur
module.exports.deleteMatiere = async(req, res) => {

    const id = parseInt(req.params.id);

    const results = await db.query(matiereQueries.getMatiereById, [id])
    //console.log(results);

    try{
        const noMatiereFound = !results.rows.length;
        if (noMatiereFound) {
            res.send("Impossible de supprimer cette matière car il n'existe pas dans la base de données. ");
        } else {
            const result = await db.query(matiereQueries.deleteMatiere, [id])
            //console.log(result);
            if (result) {
                res.status(200).send("Matière supprimé avec succès");
            } else {
                res.status(400).send("Erreur")
            }
        }
    } catch (err){
        res.status(400).send(err)
    }
    
} 

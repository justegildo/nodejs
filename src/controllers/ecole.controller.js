const db = require("../config/dbConfig");
const ecoleQueries = require('../queries/ecole.queries');

//afficher tous les type utilisateurs
module.exports.getAllEcoles = async (req, res) => {

    const results = await db.query(ecoleQueries.getAllEcoles)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un type utilisateur
module.exports.getEcoleById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(ecoleQueries.getEcoleById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Cet utilisateur n'existe pas")
    }
} 
/* 
//env
module.exports.addEcole =  async (req, res) => {
    const { label } = req.body;

    //ajouter un type utilisateur
    const result = await db.query(ecoleQueries.addEcole, [label])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Type utilisateur créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un type utilisateur
module.exports.updateEcole = async (req, res) => {
    const id = parseInt(req.params.id);
    const { label } = req.body;

    const result = await db.query(ecoleQueries.getEcoleById, [id])
    const noecoleFound = !result.rows.length;

    if (noecoleFound) {
        res.status(400).send("Impossible de modifier ce type utilisateur car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(ecoleQueries.updateEcole, [label, id])

       if(results.rowCount && results.command === 'UPDATE'){
             res.status(200).send("Type utilisateur modifié avec succès !");
       } else {
        res.status(400).send("Erreur")
       }
    }
} 


//supprimer un type utilisateur
module.exports.deleteEcole = async(req, res) => {

    const id = parseInt(req.params.id);

    const results = await db.query(ecoleQueries.getEcoleById, [id])
    //console.log(results);

    try{
        const noNiveauecoleFound = !results.rows.length;
        if (noNiveauecoleFound) {
            res.send("Impossible de supprimer ce type car il n'existe pas dans la base de données. ");
        } else {
            const result = await db.query(ecoleQueries.deleteEcole, [id])
            //console.log(result);
            if (result) {
                res.status(200).send("Type utilisateur supprimé avec succès");
            } else {
                res.status(400).send("Erreur")
            }
        }
    } catch (err){
        res.status(400).send(err)
    }
    
}  */

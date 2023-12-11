const db = require("../config/dbConfig");
const typeUtilisateurQueries = require('../queries/typeUtilisateur.queries');

//afficher tous les type utilisateurs
module.exports.getAllTypeUtilisateurs = async (req, res) => {

    const results = await db.query(typeUtilisateurQueries.getAllTypeUtilisateurs)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un type utilisateur
module.exports.getTypeUtilisateurById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(typeUtilisateurQueries.getTypeUtilisateurById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Cet utilisateur n'existe pas")
    }
} 

//env
module.exports.addTypeUtilisateur =  async (req, res) => {
    const { label } = req.body;

    //ajouter un type utilisateur
    const result = await db.query(typeUtilisateurQueries.addTypeUtilisateur, [label])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Type utilisateur créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un type utilisateur
module.exports.updateTypeUtilisateur = async (req, res) => {
    const id = parseInt(req.params.id);
    const { label } = req.body;

    const result = await db.query(typeUtilisateurQueries.getTypeUtilisateurById, [id])
    const noTypeUtilisateurFound = !result.rows.length;

    if (noTypeUtilisateurFound) {
        res.status(400).send("Impossible de modifier ce type utilisateur car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(typeUtilisateurQueries.updateTypeUtilisateur, [label, id])

       if(results.rowCount && results.command === 'UPDATE'){
             res.status(200).send("Type utilisateur modifié avec succès !");
       } else {
        res.status(400).send("Erreur")
       }
    }
} 


//supprimer un type utilisateur
module.exports.deleteTypeUtilisateur = async(req, res) => {

    const id = parseInt(req.params.id);

    const results = await db.query(typeUtilisateurQueries.getTypeUtilisateurById, [id])
    //console.log(results);

    try{
        const noNiveauTypeUtilisateurFound = !results.rows.length;
        if (noNiveauTypeUtilisateurFound) {
            res.send("Impossible de supprimer ce type car il n'existe pas dans la base de données. ");
        } else {
            const result = await db.query(typeUtilisateurQueries.deleteTypeUtilisateur, [id])
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
    
} 

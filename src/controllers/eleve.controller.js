const db = require("../config/dbConfig");
const eleveQueries = require('../queries/eleve.queries');

//afficher tous les type utilisateurs
module.exports.getAllEleves = async (req, res) => {

    const results = await db.query(eleveQueries.getAllEleves)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un type utilisateur
module.exports.getEleveById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(eleveQueries.getEleveById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Cet élève n'existe pas")
    }
} 

//env
module.exports.addEleve =  async (req, res) => {
    const { nom, prenoms, sexe, date_naissance, niveau, filiere, ecole } = req.body;

    //ajouter un type utilisateur
    const result = await db.query(eleveQueries.addEleve, [nom, prenoms, sexe, date_naissance, niveau, filiere, ecole])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Elève créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un type utilisateur
module.exports.updateEleve = async (req, res) => {
    const id = parseInt(req.params.id);
    const { nom, prenoms, sexe, date_naissance, niveau, filiere, ecole } = req.body;

    const result = await db.query(eleveQueries.getEleveById, [id])
    const noEleveFound = !result.rows.length;

    if (noEleveFound) {
        res.status(400).send("Impossible de modifier cet élève car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(eleveQueries.updateEleve, [nom, prenoms, sexe, date_naissance, niveau, filiere, ecole, id])

       if(results.rowCount && results.command === 'UPDATE'){
             res.status(200).send("Elève modifié avec succès !");
       } else {
        res.status(400).send("Erreur")
       }
    }
} 


//supprimer un type utilisateur
module.exports.deleteEleve = async(req, res) => {

    const id = parseInt(req.params.id);

    const results = await db.query(eleveQueries.getEleveById, [id])
    //console.log(results);

    try{
        const noEleveFound = !results.rows.length;
        if (noEleveFound) {
            res.send("Impossible de supprimer cet élève car il n'existe pas dans la base de données. ");
        } else {
            const result = await db.query(eleveQueries.deleteEleve, [id])
            //console.log(result);
            if (result) {
                res.status(200).send("Elève supprimé avec succès");
            } else {
                res.status(400).send("Erreur")
            }
        }
    } catch (err){
        res.status(400).send(err)
    }
    
} 

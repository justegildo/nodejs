const jwt = require('jsonwebtoken');
const db = require('../config/dbConfig');
const bcrypt = require('bcryptjs');
const utilisateurQueries = require('../queries/utilisateur.queries');


//module pour s'authenrifier 
module.exports.signIn = async (req, res) => {
  const { username, password } = req.body;

  const username2 = username.replace(/\s/g, '');
  //console.log(username2);

  //se connecter
  const query = await db.query(utilisateurQueries.getUser, [username2, username2]);
  const user = query.rows[0];
  //console.log(user);

  if (!user) {

    res.status(401).send('Ce compte n\'existe pas !');

  } else {

    if (user.delete === true)  {

      res.status(401).send('Ce compte n\'existe plus !');

    } else if (user.is_active === false) {

      res.status(400).send("Compte désactivé, veuillez contacter l'administrateur !")

    } else {

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {

        res.status(401).send('Mot de passe incorrect !');

      } else {

        const token = jwt.sign(

          { name: user.name, email: user.email, telephone: user.telephone },
          process.env.TOKEN_KEY,
          { expiresIn: process.env.TOKEN_DURING }

        );

        res.send({ token })

      }
    }
  }
}



//module pour update le mot de passe
module.exports.updatePassword = async (req, res) => {
  const { username, oldPassword, newPassword } = req.body

  const result = await db.query(utilisateurQueries.getUser, [username, username]);

  if (!result.rows[0]) {
    res.status(401).send({ message: 'Cet utilisateur n\'existe pas !' })
  } else {


    const verifyPassword = await bcrypt.compare(oldPassword, result.rows[0].password);

    if (!verifyPassword) {
      res.status(401).send({ message: 'Ancien mot de passe incorrect !' })
    } else {

      var hashNewPassword = bcrypt.hashSync(newPassword);
      const result = await db.query(utilisateurQueries.updatePassword, [hashNewPassword, username, username]);

      if (!result.rowCount) {
        res.status(401).send({ message: 'Impossible de modifier le mot de passe !' })
      } else {
        res.send({ message: 'Mot de passe modifié !' })
      }
    }
  }
}

//active compte
module.exports.enableAccount = (req, res) => {
  const userId = parseInt(req.params.id);

  //console.log(userId);

  db.query(utilisateurQueries.activeCompte, [userId], (error, results) => {
    //console.log(results);
    if (error) {
      res.send(error)
      //console.error(error);
      return;
    } else if (results.rowCount && results.command === 'UPDATE') {
      res.status(200).json("Utilisateur réactivé avec succès !")

    } else {
      res.status(401).json("Impossible de réactiver le compte !")
    }
  })
}


//desactive compte
module.exports.disableAccount = (req, res) => {
  const userId = parseInt(req.params.id);
  //console.log(userId);

  db.query(utilisateurQueries.desactiveCompte, [userId], (error, results) => {
    if (error) {
      res.send(error)
      //console.error(error);
      return;
    } else if (results.rowCount && results.command === 'UPDATE') {
      res.status(200).json("Utilisateur désactivé avec succès !")

    } else {
      res.status(400).json("Impossible de désactiver le compte !")
    }
  })
}


//reset password
module.exports.resetPassword = async (req, res) => {
  const { username, newPassword } = req.body;

  //console.log(username);

  const result = await db.query(utilisateurQueries.getUser, [username, username]);
  //console.log(result);

  if (!result.rows[0]) {
    res.status(401).send({ message: 'Ce compte n\'existe pas !' })
  } else {
    const result = await db.query(utilisateurQueries.reset, [username, username]);

    if (!result.rowCount) {
      res.status(401).send({ message: 'Impossible de réinitialiser le mot de passe !' })
    } else {

      var hashNewPassword = bcrypt.hashSync(newPassword);
      const result2 = await db.query(utilisateurQueries.updatePassword, [hashNewPassword, username, username]);

      if (!result2.rowCount) {
        res.status(401).send("Erreur")
      } else {
        res.send({ message: 'Mot de passe réinitialisé !' })
      }
    }
  }
}

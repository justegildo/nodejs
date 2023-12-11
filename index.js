const express = require('express');
const app =express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config({path: './src/config/.env'});
const userRoutes = require('./src/routes/utilisateur.routes')
const typeUserRoutes = require('./src/routes/typeUtilisateur.routes')
const fileUploaRoutes = require('./src/routes/fileUpload.routes')
const ecoleRoutes = require('./src/routes/ecole.routes')
const eleveRoutes = require('./src/routes/eleve.routes')
const matiereRoutes = require('./src/routes/matiere.routes')
const verifyAuthToken = require ('./src/middleware/middleware')

app.use(express.json());

var corsOptions = {
    "origin": "*",
    "optionsSuccessStatus": 204,
    "credentials": true,
    'allowedHeaders': ['sessionId', 'Content-Type', 'Authorization'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,',
    'preflightContinue': false 
};


app.use(cors(corsOptions));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


//gestion swagger 
app.use('/gestion-ecole-api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

//utilisateur
app.use('/api/user', /* verifyAuthToken,*/ userRoutes);

//type utilisateur
app.use('/api/type-user',/* verifyAuthToken,*/ typeUserRoutes);

//ecole
app.use('/api/ecole',/* verifyAuthToken,*/ ecoleRoutes);

//eleve
app.use('/api/eleve',/* verifyAuthToken,*/ eleveRoutes);

//matiere
app.use('/api/matiere',/* verifyAuthToken,*/ matiereRoutes);

//file upload
app.use('/api/file-upload',  fileUploaRoutes);


//le port
app.listen(process.env.SERVEUR_PORT, '192.168.100.26',  () => 
    console.log(`Server started in port ${process.env.SERVEUR_PORT} && aller sur le swagger http://localhost:${process.env.SERVEUR_PORT}/gestion-ecole-api-docs`
));
//startApp();

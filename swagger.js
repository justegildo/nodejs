const swaggerJSDoc = require('swagger-jsdoc');
require('dotenv').config({path: './src/config/.env'});


const swaggerDefinition = {
  openapi: '3.0.0',
  //basePath: '../back/src/components/schemas',
  info: {
    title: 'API REST',
    version: '1.0.0',
    description: 'API of EcoleApp',
    license: {
      name: "ECO-MOY",
      url: "https://spdx.org/licenses/JDG.html",
    },

    contact: {
      name: "Juste Gildo",
      url: "https://juste-gildo.com",
      email: "dossousedjrogildas@gmail.com",
    },
  },

  components: {
    securitySchemes: {
      bearerAuth: {
        type: "apiKey",
        in: "Bearer",
        name: "Authorization",
      },

      OpenID: {
        type: "openIdConnect",
        openIdConnectUrl: 'https://example.com/.well-known/openid-configuration'
      }
    },

    security: [
      {
        bearerAuth: []
      }
    ],

    schemas: {
      Utilisateur: {
        "type": "object",
        "properties": {
          "nom": {
            "type": "string"
          },
          "prenoms": {
            "type": "string"
          },
          "sexe": {
            "type": "string"
          },
          "email": {
            "type": "string",
            "format": "email"
          },
          "telephone": {
            "type": "string",
            "format": "number"
          },
          "password": {
            "type": "string"
          },
          "type_utilisateur_id": {
            "type": "string",
            //"format": "number"
          },
          "nom_ecole": {
            "type": "string"
          },
          "adresse": {
            "type": "string"
          },
          "matiere": {
            "type": "string",
            //"format": "number"
          },
        },
        "required": [
          "nom", "prenom", "email", "password"
        ]
      },

      UpdateUtilisateur: {
         "type": "object",
         "properties": {
           "nom" : {
               "type": "string"
           },
           "prenoms": {
               "type": "string"
           }, 
           "sexe":{
               "type": "string"
           },
           "email": {
             "type": "string",
             "format": "email"
           },
           "telephone": {
             "type": "string",
             "format": "number"
           },
           "type_utilisateur": {
             "type": "string"
           }
           },
           "required": [ 
             "nom", "prenom", "email"
           ]
       },

      Authentification: {
        "type": "object",
        "properties": {
          "username": {
            "type": "string"
          },
          "password": {
            "type": "string"
          }
        },
        "required": [
          "username", "password"
        ]
      },

      UpdatePassword: {
        "type": "object",
        "properties": {
          "username": {
            "type": "string"
          },
          "oldPassword": {
            "type": "string"
          }
          ,
          "newPassword": {
            "type": "string"
          }
        },
        "required": [
          "username", "oldPassword", "newPassword"
        ]
      },

      ResetPassword: {
        "type": "object",
        "properties": {
          "username": {
            "type": "string"
          },
          "newPassword": {
            "type": "string"
          }
        },
        "required": [
          "username", "newPassword"
        ]
      },

      TypeUtilisateur: {
        "type": "object",
        "properties": {
          "label": {
            "type": "string"
          }
        },
        "required": [
          "label"
        ]
      },

      Eleve: {
        "type": "object",
        "properties": {
          "nom": {
            "type": "string"
          }, 
          "prenoms": {
            "type": "string"
          }, 
          "sexe": {
            "type": "string"
          }, 
          "date_naissance": {
            "type": "date"
          }, 
          "niveau": {
            "type": "string"
          },
          "filiere": {
            "type": "string"
          }, 
          "ecole": {
            "type": "string"
          }
        }
      },

      Matiere: {
        "type": "object",
        "properties": {
          "libelle": {
            "type": "string"
          }
        },
        "required": [
          "libelle"
        ]
      },

    }
  },
  servers: [
    {
      url: `http://localhost:${process.env.SERVEUR_PORT}`,
      description: 'Local server',
      url: `http://192.168.100.26:${process.env.SERVEUR_PORT}`,
      description: 'Local server',
    },
  ],
};


const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token,Origin, X-Requested-With, Content, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  
  app.use((req, res) => {
    res.json({
      "Ouest": [
        {
          "ville": "Bafoussam",
          "adresses": [
            {
              "adresse": "Ancien Plateau, BP 123",
              "code_postal": "12345"
            },
            {
              "adresse": "Nouveau Plateau, Rue des Fleurs",
              "code_postal": "12346"
            },
            {
              "adresse": "Bamendzi, Avenue de l'Indépendance",
              "code_postal": "12347"
            },
            {
              "adresse": "Bansoa, Rue du Marché",
              "code_postal": "12348"
            }
          ]
        },
        {
          "ville": "Dschang",
          "adresses": [
            {
              "adresse": "Cité des Magistrats, BP 456",
              "code_postal": "23451"
            },
            {
              "adresse": "Université, Cité Universitaire",
              "code_postal": "23452"
            },
            {
              "adresse": "Château, Rue de la Paix",
              "code_postal": "23453"
            },
            {
              "adresse": "Carrière, Rue du Commerce",
              "code_postal": "23454"
            }
          ]
        },
        {
          "ville": "Mbouda",
          "adresses": [
            {
              "adresse": "Atié, BP 789",
              "code_postal": "34561"
            },
            {
              "adresse": "Petit-Paris, Avenue des Martyrs",
              "code_postal": "34562"
            },
            {
              "adresse": "Poste, Rue de l'Hôpital",
              "code_postal": "34563"
            },
            {
              "adresse": "Gare, Rue de la Gare",
              "code_postal": "34564"
            }
          ]
        },
        {
          "ville": "Foumban",
          "adresses": [
            {
              "adresse": "Ancien Palais, BP 321",
              "code_postal": "45671"
            },
            {
              "adresse": "Nouveau Palais, Avenue Royale",
              "code_postal": "45672"
            },
            {
              "adresse": "Douala, Rue des Artisans",
              "code_postal": "45673"
            },
            {
              "adresse": "Marché, Rue du Marché",
              "code_postal": "45674"
            }
          ]
        },
        {
          "ville": "Bangangté",
          "adresses": [
            {
              "adresse": "Centre-Ville, BP 159",
              "code_postal": "56781"
            },
            {
              "adresse": "Porte de Bafang, Avenue de la Liberté",
              "code_postal": "56782"
            },
            {
              "adresse": "Dispensaire, Rue de l'Hôpital",
              "code_postal": "56783"
            },
            {
              "adresse": "Gendarmerie, Rue de la Gendarmerie",
              "code_postal": "56784"
            }
          ]
        }
      ]
    }); 
 });

module.exports = app;
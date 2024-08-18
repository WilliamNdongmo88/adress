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
              "Quartier Ancien Plateau, BP 123",
              "Quartier Nouveau Plateau, Rue des Fleurs",
              "Quartier Bamendzi, Avenue de l'Indépendance",
              "Quartier Bansoa, Rue du Marché"
            ]
          },
          {
            "ville": "Dschang",
            "adresses": [
              "Quartier Cité des Magistrats, BP 456",
              "Quartier Université, Cité Universitaire",
              "Quartier Château, Rue de la Paix",
              "Quartier Carrière, Rue du Commerce"
            ]
          },
          {
            "ville": "Mbouda",
            "adresses": [
              "Quartier Atié, BP 789",
              "Quartier Petit-Paris, Avenue des Martyrs",
              "Quartier Poste, Rue de l'Hôpital",
              "Quartier Gare, Rue de la Gare"
            ]
          },
          {
            "ville": "Foumban",
            "adresses": [
              "Quartier Ancien Palais, BP 321",
              "Quartier Nouveau Palais, Avenue Royale",
              "Quartier Douala, Rue des Artisans",
              "Quartier Marché, Rue du Marché"
            ]
          },
          {
            "ville": "Bangangté",
            "adresses": [
              "Quartier Centre-Ville, BP 159",
              "Quartier Porte de Bafang, Avenue de la Liberté",
              "Quartier Dispensaire, Rue de l'Hôpital",
              "Quartier Gendarmerie, Rue de la Gendarmerie"
            ]
          }
        ]
      }); 
 });

module.exports = app;
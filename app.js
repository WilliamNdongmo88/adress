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
              "adresse": "Gouache, Rue 1, Avant ENIEGE, BP 11345",
              "code_postal": "11345",
              "reference": "1000113450001", 
              "index": 451, 
              "dernier_date_releve_index": "Jeudi 25 Novembre 2021"
            },
            {
              "adresse": "Gouache, Rue 2, Avant ENIEGE, BP 21345",
              "code_postal": "21345",
              "reference": "2000213450002", 
              "index": 51, 
              "dernier_date_releve_index": "Jeudi 25 Novembre 2023"
            },
            {
              "adresse": "Gouache, Rue 3, En face ENIEGE, BP 31345",
              "code_postal": "31345",
              "reference": "3000313450003", 
              "index": 45, 
              "dernier_date_releve_index": "Jeudi 25 Janvier 2024"
            },
            {
              "adresse": "Gouache, Rue 4, Après ENIEGE, BP 41345",
              "code_postal": "41345",
              "reference": "4000413450004", 
              "index": 41, 
              "dernier_date_releve_index": "Lundi 5 Janvier 2024"
            },
            {
              "adresse": "Gouache, Rue 5, Après ENIEGE, BP 51345",
              "code_postal": "51345",
              "reference": "5000513450005", 
              "index": 15, 
              "dernier_date_releve_index": "Mercredi 15 Mars 2024"
            },
            {
              "adresse": "Gouache 2, Rue 3, Eglise évangélique, BP 32345",
              "code_postal": "32345",
              "reference": "3000323450003", 
              "index": 14, 
              "dernier_date_releve_index": "Mardi 21 Février 2024"
            },
            {
              "adresse": "Bamendzi, Avenue de l'Indépendance",
              "code_postal": "12347",
              "reference": "0000123470000",
              "index": 452,
              "dernier_date_releve_index": "Mercredi 15 Septembre 2021"
            },
            {
              "adresse": "Bamendzi, Rue 1, Près du Marché Bamendzi, BP 11201",
              "code_postal": "11201",
              "reference": "1000112010002",
              "index": 452,
              "dernier_date_releve_index": "Mercredi 15 Septembre 2021"
            },
            {
              "adresse": "Bamendzi, Rue 7, Proche Église, BP 12505",
              "code_postal": "12505",
              "reference": "1000125050003",
              "index": 453,
              "dernier_date_releve_index": "Vendredi 5 Novembre 2021"
            },
            {
              "adresse": "Djeleng, Rue des Sapeurs, BP 10204",
              "code_postal": "10204",
              "reference": "1000102040004",
              "index": 454,
              "dernier_date_releve_index": "Mardi 20 Octobre 2021"
            },
            {
              "adresse": "Djeleng, Avenue Centrale, BP 11308",
              "code_postal": "11308",
              "reference": "1000113080005",
              "index": 455,
              "dernier_date_releve_index": "Mercredi 8 Septembre 2021"
            },
            {
              "adresse": "Évêché, Rue des Pères, BP 10120",
              "code_postal": "10120",
              "reference": "1000101200007",
              "index": 457,
              "dernier_date_releve_index": "Samedi 15 Mai 2021"
            },
            {
              "adresse": "Évêché, Rue de la Cathédrale, BP 11220",
              "code_postal": "11220",
              "reference": "1000112200006",
              "index": 456,
              "dernier_date_releve_index": "Jeudi 10 Juin 2021"
            },
            {
              "adresse": "Famla, Rue 2, Près de l'École Primaire, BP 11330",
              "code_postal": "11330",
              "reference": "1000113300007",
              "index": 457,
              "dernier_date_releve_index": "Dimanche 5 Septembre 2021"
            },
            {
              "adresse": "Famla, Rue des Écoliers, BP 01030",
              "code_postal": "01030",
              "reference": "1000010300008",
              "index": 458,
              "dernier_date_releve_index": "Mercredi 11 Août 2021"
            },
            {
              "adresse": "Haoussa, Rue des Artisans, BP 01320",
              "code_postal": "01320",
              "reference": "1000013200008",
              "index": 458,
              "dernier_date_releve_index": "Mercredi 22 Septembre 2021"
            },
            {
              "adresse": "Haoussa, Avenue des Tailleurs, BP 11350",
              "code_postal": "11350",
              "reference": "1000113500009",
              "index": 459,
              "dernier_date_releve_index": "Samedi 6 Mars 2021"
            },
            {
              "adresse": "Kamkop, Rue des Écoles, BP 11333",
              "code_postal": "11333",
              "reference": "1000113330012",
              "index": 462,
              "dernier_date_releve_index": "Vendredi 7 Mai 2021"
            },
            {
              "adresse": "Kena, Rue du Marché, BP 11293",
              "code_postal": "11293",
              "reference": "1000112930013",
              "index": 463,
              "dernier_date_releve_index": "Lundi 26 Juillet 2021"
            },
            {
              "adresse": "Keuleu, Rue des Marchands, BP 11288",
              "code_postal": "11288",
              "reference": "1000112880014",
              "index": 464,
              "dernier_date_releve_index": "Mardi 1er Juin 2021"
            },
            {
              "adresse": "Kouogouo, Rue 5, Près du Lycée, BP 11344",
              "code_postal": "11344",
              "reference": "1000113440015",
              "index": 465,
              "dernier_date_releve_index": "Samedi 10 Avril 2021"
            },
            {
              "adresse": "Metto, Rue du Lycée Technique, BP 11339",
              "code_postal": "11339",
              "reference": "1000113390016",
              "index": 466,
              "dernier_date_releve_index": "Jeudi 19 Août 2021"
            },
            {
              "adresse": "Ndiandam, Rue des Palmiers, BP 11353",
              "code_postal": "11353",
              "reference": "1000113530020",
              "index": 470,
              "dernier_date_releve_index": "Vendredi 9 Juillet 2021"
            },
            {
              "adresse": "Nylon, Rue de la Mairie, BP 11267",
              "code_postal": "11267",
              "reference": "1000112670021",
              "index": 471,
              "dernier_date_releve_index": "Lundi 19 Juillet 2021"
            },
            {
              "adresse": "Tamdja, Rue de l'École Publique, BP 11346",
              "code_postal": "11346",
              "reference": "1000113460023",
              "index": 473,
              "dernier_date_releve_index": "Jeudi 1er Juillet 2021"
            },
            {
              "adresse": "Toket, Rue 9, Derrière le Collège, BP 11335",
              "code_postal": "11335",
              "reference": "1000113350024",
              "index": 474,
              "dernier_date_releve_index": "Mardi 4 Mai 2021"
            },
            {
              "adresse": "Tyo, Rue 10, Près de l'École Primaire, BP 11337",
              "code_postal": "11337",
              "reference": "1000113370028",
              "index": 478,
              "dernier_date_releve_index": "Samedi 13 Février 2021"
            }
                                            
          ]
        },
        {
          "ville": "Dschang",
          "adresses": [
            {
              "adresse": "Nteingue, Rue 4, Près de l'Université, BP 11500",
              "code_postal": "11500",
              "reference": "1000115000001",
              "index": 320,
              "dernier_date_releve_index": "Lundi 8 Août 2022"
            },
            {
              "adresse": "Nteingue, Rue 7, Proche Église Catholique, BP 11502",
              "code_postal": "11502",
              "reference": "1000115020003",
              "index": 322,
              "dernier_date_releve_index": "Vendredi 12 Novembre 2022"
            },
            {
              "adresse": "Nteingue, Rue 2, Derrière Marché Central, BP 11503",
              "code_postal": "11503",
              "reference": "1000115030004",
              "index": 323,
              "dernier_date_releve_index": "Mercredi 21 Septembre 2022"
            },
            {
              "adresse": "Ngui, Avenue des Résistants, BP 11501",
              "code_postal": "11501",
              "reference": "1000115010002",
              "index": 321,
              "dernier_date_releve_index": "Mercredi 12 Octobre 2022"
            },
            {
              "adresse": "Ngui, Rue des Artisans, BP 11504",
              "code_postal": "11504",
              "reference": "1000115040005",
              "index": 324,
              "dernier_date_releve_index": "Samedi 6 Août 2022"
            },
            {
              "adresse": "Ngui, Rue 3, Quartier des Écoles, BP 11505",
              "code_postal": "11505",
              "reference": "1000115050006",
              "index": 325,
              "dernier_date_releve_index": "Dimanche 18 Décembre 2022"
            }
          ]
        },
        {
          "ville": "Mbouda",
          "adresses": [
            {
              "adresse": "Bamesso, Rue des Palmiers, BP 11240",
              "code_postal": "11240",
              "reference": "1000112400001",
              "index": 410,
              "dernier_date_releve_index": "Mardi 20 Décembre 2022"
            },
            {
              "adresse": "Bamesso, Rue 6, Près du Marché Central, BP 11242",
              "code_postal": "11242",
              "reference": "1000112420002",
              "index": 411,
              "dernier_date_releve_index": "Vendredi 15 Juillet 2022"
            },
            {
              "adresse": "Bamesso, Rue 3, Près de l'Hôtel de Ville, BP 11243",
              "code_postal": "11243",
              "reference": "1000112430003",
              "index": 412,
              "dernier_date_releve_index": "Lundi 18 Septembre 2022"
            },
            {
              "adresse": "Baleng, Rue du Marché Central, BP 11241",
              "code_postal": "11241",
              "reference": "1000112410002",
              "index": 411,
              "dernier_date_releve_index": "Vendredi 15 Juillet 2022"
            },
            {
              "adresse": "Baleng, Rue des Artisans, BP 11244",
              "code_postal": "11244",
              "reference": "1000112440004",
              "index": 413,
              "dernier_date_releve_index": "Mercredi 19 Octobre 2022"
            },
            {
              "adresse": "Baleng, Rue des Marchands, BP 11245",
              "code_postal": "11245",
              "reference": "1000112450005",
              "index": 414,
              "dernier_date_releve_index": "Dimanche 23 Juillet 2022"
            }
          ]
        },
        {
          "ville": "Foumban",
          "adresses": [
            {
              "adresse": "Njinka, Avenue des Arts, BP 11310",
              "code_postal": "11310",
              "reference": "1000113100001",
              "index": 360,
              "dernier_date_releve_index": "Lundi 5 Septembre 2022"
            },
            {
              "adresse": "Njinka, Rue des Écoles, BP 11312",
              "code_postal": "11312",
              "reference": "1000113120002",
              "index": 361,
              "dernier_date_releve_index": "Jeudi 20 Octobre 2022"
            },
            {
              "adresse": "Njinka, Rue 9, Près de la Mairie, BP 11313",
              "code_postal": "11313",
              "reference": "1000113130003",
              "index": 362,
              "dernier_date_releve_index": "Vendredi 14 Janvier 2022"
            },
            {
              "adresse": "Njintougou, Rue de l'Hôpital, BP 11311",
              "code_postal": "11311",
              "reference": "1000113110002",
              "index": 361,
              "dernier_date_releve_index": "Jeudi 7 Juillet 2022"
            },
            {
              "adresse": "Njintougou, Avenue des Coopérants, BP 11314",
              "code_postal": "11314",
              "reference": "1000113140004",
              "index": 363,
              "dernier_date_releve_index": "Samedi 12 Février 2022"
            },
            {
              "adresse": "Njintougou, Rue des Jardins, BP 11315",
              "code_postal": "11315",
              "reference": "1000113150005",
              "index": 364,
              "dernier_date_releve_index": "Dimanche 23 Juillet 2022"
            }
          ]
        },
        {
          "ville": "Bangangté",
          "adresses": [
            {
              "adresse": "Tonga, Rue des Écoles, BP 11400",
              "code_postal": "11400",
              "reference": "1000114000001",
              "index": 290,
              "dernier_date_releve_index": "Vendredi 1er Juillet 2022"
            },
            {
              "adresse": "Tonga, Rue des Marchands, BP 11402",
              "code_postal": "11402",
              "reference": "1000114020002",
              "index": 291,
              "dernier_date_releve_index": "Samedi 25 Septembre 2022"
            },
            {
              "adresse": "Tonga, Rue de l'Église, BP 11403",
              "code_postal": "11403",
              "reference": "1000114030003",
              "index": 292,
              "dernier_date_releve_index": "Lundi 14 Novembre 2022"
            },
            {
              "adresse": "Banka, Avenue du Lycée, BP 11401",
              "code_postal": "11401",
              "reference": "1000114010002",
              "index": 291,
              "dernier_date_releve_index": "Samedi 3 Septembre 2022"
            },
            {
              "adresse": "Banka, Rue 4, Quartier des Commerçants, BP 11404",
              "code_postal": "11404",
              "reference": "1000114040004",
              "index": 293,
              "dernier_date_releve_index": "Dimanche 6 Mars 2022"
            },
            {
              "adresse": "Banka, Rue des Marchands, BP 11405",
              "code_postal": "11405",
              "reference": "1000114050005",
              "index": 294,
              "dernier_date_releve_index": "Mercredi 9 Novembre 2022"
            }
          ]
        }
      ]
    }); 
 });

module.exports = app;
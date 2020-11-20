"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VotureAmphibie_1 = require("./garage/implementation/VotureAmphibie");
var Bateau_1 = require("./garage/implementation/Bateau");
var Voiture_1 = require("./garage/implementation/Voiture");
var Camion_1 = require("./garage/implementation/Camion");
var voiture = new Voiture_1.Voiture(320, 2);
var fausseVoiture = new Voiture_1.Voiture(300, 5);
var fauxBateau = new Bateau_1.Bateau(120, 20, 5);
var bateau = new Bateau_1.Bateau(100, 35, 2);
var voitureBateau = new VotureAmphibie_1.VoitureAmphibie(25, 7, 300);
var camion = new Camion_1.Camion(90, 2000);
var entrepot = [voiture, bateau, voitureBateau];
var quai = [bateau, voitureBateau];
var garage = [voiture, voitureBateau, camion];
entrepot.forEach(function (elem) {
    console.log(elem.avancer());
});
voiture.exploser();
fausseVoiture.avancer();
fauxBateau.avancer();
fauxBateau.avancer();
//Ca, ça passera pas par contre : 
// (fausseVoiture as Bateau).coule();
//# sourceMappingURL=index.js.map
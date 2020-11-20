"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoitureAmphibie = void 0;
var VoitureAmphibie = /** @class */ (function () {
    function VoitureAmphibie(vitesseMax, nombrePassagers, chargeMax) {
        this.nombreRoues = 4;
        this.vitesseMax = vitesseMax;
        this.nombrePassagers = nombrePassagers;
        this.chargeMax = chargeMax;
    }
    VoitureAmphibie.prototype.avancer = function () {
        return "J'avance sur la route ou sur l'eau, balek";
    };
    VoitureAmphibie.prototype.arreter = function () {
        return "tu te démerdes pour t'arrêter, José!";
    };
    VoitureAmphibie.prototype.roule = function () {
        return "la route c'est cool";
    };
    VoitureAmphibie.prototype.flotte = function () {
        return "l'eau c'est cool";
    };
    return VoitureAmphibie;
}());
exports.VoitureAmphibie = VoitureAmphibie;
//# sourceMappingURL=VotureAmphibie.js.map
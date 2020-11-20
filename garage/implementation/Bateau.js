"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bateau = void 0;
var Bateau = /** @class */ (function () {
    function Bateau(chargeMax, vitesseMax, nombrePassagers) {
        this.chargeMax = chargeMax;
        this.nombrePassagers = nombrePassagers;
        this.vitesseMax = vitesseMax;
    }
    Bateau.prototype.flotte = function () {
        return "Bruit d'eau sur la coque";
    };
    Bateau.prototype.avancer = function () {
        return "J'avance :" + this.flotte();
    };
    Bateau.prototype.arreter = function () {
        return "On jette l'ancre!";
    };
    Bateau.prototype.coule = function () {
        return "Bloub";
    };
    return Bateau;
}());
exports.Bateau = Bateau;
//# sourceMappingURL=Bateau.js.map
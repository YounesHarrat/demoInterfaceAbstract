"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(vitesse, moteur, nb_passager) {
        this._vitesse = vitesse;
        this._moteur = moteur;
        this._nb_passager = nb_passager;
    }
    Vehicle.prototype.setvitesse = function (vitesse) {
        this._vitesse = vitesse;
    };
    Vehicle.prototype.setmoteur = function (moteur) {
        this._moteur = moteur;
    };
    Vehicle.prototype.setnb_passager = function (nb_passager) {
        this._nb_passager = nb_passager;
    };
    Vehicle.prototype.getvitesse = function (vitesse) {
        return this._vitesse;
    };
    Vehicle.prototype.getmoteur = function (moteur) {
        return this._moteur;
    };
    Vehicle.prototype.getnb_passager = function (nb_passager) {
        return this._nb_passager;
    };
    Vehicle.prototype.definition = function () {
        return "Je suis un véhicule de " + this.getnb_passager + " passager qui roule à " + this.getvitesse + " KM/H la marque de mon moteur est " + this._moteur;
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
var voiture = new Vehicle(150, "éduscol STI", 4);
console.log(voiture.definition());
voiture.setvitesse(110);
console.log(voiture.definition());
//# sourceMappingURL=test.js.map
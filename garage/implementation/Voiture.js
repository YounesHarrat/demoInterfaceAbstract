"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voiture = void 0;
var AbstractVehiculeTerrestre_1 = require("./AbstractVehiculeTerrestre");
var Voiture = /** @class */ (function (_super) {
    __extends(Voiture, _super);
    function Voiture(vitesseMax, nombrePassagers) {
        return _super.call(this, vitesseMax, nombrePassagers) || this;
    }
    Voiture.prototype.roule = function () {
        return "Bruit de pneus sur la route";
    };
    Voiture.prototype.arreter = function () {
        return "Je m'arrête!";
    };
    Voiture.prototype.exploser = function () {
        return "Boum!";
    };
    return Voiture;
}(AbstractVehiculeTerrestre_1.AbstractVehiculeTerrestreAQuatreRoues));
exports.Voiture = Voiture;
//# sourceMappingURL=Voiture.js.map
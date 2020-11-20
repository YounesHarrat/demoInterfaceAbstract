"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractVehiculeTerrestreAQuatreRoues = void 0;
var AbstractVehiculeTerrestreAQuatreRoues = /** @class */ (function () {
    function AbstractVehiculeTerrestreAQuatreRoues(vitesseMax, nombrePassagers) {
        this.nombreRoues = 4;
        this.vitesseMax = vitesseMax;
        this.nombrePassagers = nombrePassagers;
    }
    AbstractVehiculeTerrestreAQuatreRoues.prototype.avancer = function () {
        return "J'avance !!!" + this.roule();
    };
    return AbstractVehiculeTerrestreAQuatreRoues;
}());
exports.AbstractVehiculeTerrestreAQuatreRoues = AbstractVehiculeTerrestreAQuatreRoues;
//# sourceMappingURL=AbstractVehiculeTerrestre.js.map
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
exports.Camion = void 0;
var AbstractVehiculeTerrestre_1 = require("./AbstractVehiculeTerrestre");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Camion.prototype.arreter = function () {
        return "je freine mais un mur ou la bagnle de devant ça fait l'affaire";
    };
    Camion.prototype.roule = function () {
        return "Cassez vous les minus";
    };
    return Camion;
}(AbstractVehiculeTerrestre_1.AbstractVehiculeTerrestreAQuatreRoues));
exports.Camion = Camion;
//# sourceMappingURL=Camion.js.map
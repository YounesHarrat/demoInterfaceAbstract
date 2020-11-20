"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chien = void 0;
var Chien = /** @class */ (function () {
    function Chien(pattes, dents) {
        this.vivant = true;
        this.pattes = pattes;
        this.dents = dents;
    }
    Chien.prototype.mange = function () {
        console.log("Miam Wouf");
    };
    Chien.prototype.dort = function () {
        console.log("Wouf ZZZzzzzZZZ");
    };
    return Chien;
}());
exports.Chien = Chien;
//# sourceMappingURL=Chien.js.map
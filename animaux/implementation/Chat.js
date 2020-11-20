"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
var Chat = /** @class */ (function () {
    function Chat(pattes, dents) {
        this.vivant = true;
        this.pattes = pattes;
        this.dents = dents;
        this.vole = false;
        this.cracheDuFeu = false;
    }
    Chat.prototype.mange = function () {
        console.log("Miam Miaou");
    };
    Chat.prototype.dort = function () {
        console.log("Miou zzzZZZzzz");
    };
    Chat.prototype.autoLeche = function () {
        console.log('sluuurp');
    };
    return Chat;
}());
exports.Chat = Chat;
//# sourceMappingURL=Chat.js.map
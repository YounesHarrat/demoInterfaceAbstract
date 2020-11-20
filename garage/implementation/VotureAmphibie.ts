import { IVehiculeFlottant } from './../interface/IVehiculeFlottant';
import { IVehiculeTerrestre } from './../interface/IVehiculeTerrestre';
export class VoitureAmphibie implements IVehiculeTerrestre, IVehiculeFlottant {
    nombreRoues: number;
    vitesseMax: number;
    nombrePassagers: number;
    chargeMax: number;

    constructor(vitesseMax: number, nombrePassagers: number, chargeMax: number){
        this.nombreRoues = 4;
        this.vitesseMax = vitesseMax;
        this.nombrePassagers = nombrePassagers;
        this.chargeMax = chargeMax;
    }
    avancer(): string {
        return "J'avance sur la route ou sur l'eau, balek";
    }

    arreter(): string {
        return "tu te démerdes pour t'arrêter, José!"
    }

    roule(): string {
        return "la route c'est cool"
    }

    flotte(): string {
        return "l'eau c'est cool"
    }
    
}
import { IVehiculeFlottant } from './../interface/IVehiculeFlottant';
export class Bateau implements IVehiculeFlottant{
    chargeMax: number;
    vitesseMax: number;
    nombrePassagers: number;

    constructor(chargeMax: number, vitesseMax: number, nombrePassagers: number){
        this.chargeMax = chargeMax;
        this.nombrePassagers = nombrePassagers;
        this.vitesseMax = vitesseMax;
    }

    flotte(): string {
        return "Bruit d'eau sur la coque"
    }

    avancer(): string {
        return "J'avance :" + this.flotte();
    }

    arreter(): string {
        return "On jette l'ancre!";
    }
    
    coule(): string {
        return "Bloub"
    }

}
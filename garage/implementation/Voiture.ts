import { IVehicule } from '../interface/IVehicule';

import { AbstractVehiculeTerrestreAQuatreRoues } from './AbstractVehiculeTerrestre';

export class Voiture extends AbstractVehiculeTerrestreAQuatreRoues{

    constructor(vitesseMax:number, nombrePassagers:number){
        super(vitesseMax,nombrePassagers)
    }

    roule(): string {
        return "Bruit de pneus sur la route"
    }

    arreter(): string {
        return "Je m'arrête!"
    }

    exploser(): string {
        return "Boum!"
    }
}
import { IVehiculeTerrestre } from './../interface/IVehiculeTerrestre';
export abstract class AbstractVehiculeTerrestreAQuatreRoues implements IVehiculeTerrestre{
    nombreRoues: number;
    vitesseMax: number;
    nombrePassagers: number;

    constructor(vitesseMax: number, nombrePassagers: number){
        this.nombreRoues = 4;
        this.vitesseMax = vitesseMax;
        this.nombrePassagers = nombrePassagers;
    }

    avancer(): string {
        return "J'avance !!!" + this.roule()
    }

    abstract arreter(): string
    abstract roule(): string;
}
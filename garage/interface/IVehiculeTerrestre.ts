import { IVehicule } from './IVehicule';
export interface IVehiculeTerrestre extends IVehicule {
    nombreRoues: number;

    roule():string ;
}



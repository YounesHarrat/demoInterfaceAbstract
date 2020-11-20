import { IVehicule } from './IVehicule';
export interface IVehiculeFlottant extends IVehicule {
    chargeMax: number;

    flotte():string;
}
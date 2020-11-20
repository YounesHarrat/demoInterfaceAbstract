import { AbstractVehiculeTerrestreAQuatreRoues } from "./AbstractVehiculeTerrestre";

export class Camion extends AbstractVehiculeTerrestreAQuatreRoues {
    arreter(): string {
        return "je freine mais un mur ou la bagnle de devant ça fait l'affaire"
    }
    roule(): string {
        return "Cassez vous les minus"
    }
    
}
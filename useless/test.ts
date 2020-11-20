export class Vehicle {
    private _vitesse: number;
    private _moteur: string;
    private _nb_passager: number;
    constructor(vitesse: number, moteur: string, nb_passager: number) {
        this._vitesse = vitesse;
        this._moteur = moteur;
        this._nb_passager = nb_passager;
    }
    public setvitesse(vitesse: number): void {
        this._vitesse = vitesse
    }
    public setmoteur(moteur: string): void {
        this._moteur = moteur
    }
    public setnb_passager(nb_passager: number): void {
        this._nb_passager = nb_passager
    }
    public getvitesse(vitesse: number) {
        return this._vitesse
    }
    public getmoteur(moteur: string) {
        return this._moteur
    }
    public getnb_passager(nb_passager: number) {
        return this._nb_passager
    }
    definition() {
        return "Je suis un véhicule de " + this.getnb_passager + " passager qui roule à " + this.getvitesse + " KM/H la marque de mon moteur est " + this._moteur
    }
}

let voiture = new Vehicle(150, "éduscol STI", 4)
console.log(voiture.definition())
voiture.setvitesse(110)

console.log(voiture.definition())
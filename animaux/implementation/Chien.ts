import { IMammifere } from './../interface/IMammifere';

export class Chien implements IMammifere{
    pattes: number;
    dents: number;
    vivant: boolean;

    constructor(pattes:number, dents:number){
        this.vivant = true;
        this.pattes = pattes;
        this.dents = dents;
    }
    

    mange(): void {
        console.log("Miam Wouf");
    }
    dort(): void {
        console.log("Wouf ZZZzzzzZZZ");
    }

}
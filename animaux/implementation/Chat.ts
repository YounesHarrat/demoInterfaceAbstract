import { IAnimal } from './../interface/IAnimal';
import { IMammifere } from './../interface/IMammifere';

export class Chat implements IMammifere, IAnimal {
    pattes: number;
    dents: number;
    vivant: boolean;
    vole: boolean;
    cracheDuFeu: boolean;

    constructor(pattes: number, dents: number) {
        this.vivant = true;
        this.pattes = pattes;
        this.dents = dents;
        this.vole=false;
        this.cracheDuFeu = false;
    }
    

    mange(): void {
        console.log("Miam Miaou")
    }

    dort(): void {
        console.log("Miou zzzZZZzzz")
    }

    autoLeche():void {
        console.log('sluuurp')
    }
}
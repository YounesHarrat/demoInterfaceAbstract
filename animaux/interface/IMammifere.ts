import { IAnimal } from './IAnimal';
export interface IMammifere extends IAnimal{
    pattes: number;
    dents: number;

    mange(): void;
    dort(): void;
}
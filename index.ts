import { IVehiculeTerrestre } from './garage/interface/IVehiculeTerrestre';
import { IVehiculeFlottant } from './garage/interface/IVehiculeFlottant';
import { IVehicule } from './garage/interface/IVehicule';
import { VoitureAmphibie } from './garage/implementation/VotureAmphibie';
import { Bateau } from './garage/implementation/Bateau';
import { Voiture } from './garage/implementation/Voiture';
import { Camion } from './garage/implementation/Camion';

let voiture: Voiture = new Voiture(320, 2);
let fausseVoiture: IVehicule = new Voiture(300, 5)
let fauxBateau: IVehicule = new Bateau(120,20,5)
let bateau:Bateau = new Bateau(100, 35, 2);
let voitureBateau:VoitureAmphibie = new VoitureAmphibie(25,7,300)
let camion:Camion = new Camion(90,2000)

let entrepot:IVehicule[] = [voiture, bateau, voitureBateau];
let quai:IVehiculeFlottant[] = [bateau, voitureBateau];
let garage:IVehiculeTerrestre[] = [voiture, voitureBateau, camion]

entrepot.forEach(elem => 
    {
        console.log(elem.avancer());
    });

voiture.exploser();
fausseVoiture.avancer();
fauxBateau.avancer();

(fauxBateau as Bateau).avancer();
//Ca, ça passera pas par contre : 
// (fausseVoiture as Bateau).coule();




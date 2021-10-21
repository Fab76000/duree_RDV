// Connaître la durée d'un rendez-vous selon une heure de fin de journée, un début de rdv et une durée connue
/* Données de base de l'énoncé:
 Heure de fin de la journée: 18h40
 Heure début du RDV: 19h15
 Durée du RDV : 20 min */


// Déclaration des variables

let finJourneeHeures = 19;
let finJourneeMinutes = 15;

let debutRdvheures = 18;
let debutRdvMinutes = 40;

let duree = 20;



// 1ère étape: calculer la fin du RDV

let finRdvHeures = debutRdvheures;
let finRdvMinutes = debutRdvMinutes + duree;

// Cas particulier où le nombre de minutes dépasse 60 minutes, on retranche 60 min aux minutes tant qu'il y a plus de 60 min et on ajoute 1 h à l'heure
// Exemple (17h15 + 65 min = 15 min + 65 min = 80 min -60 min = 20 min et 17h + 1h = 18h donc 18h20)

while (finRdvMinutes >= 60){
    finRdvHeures = finRdvHeures + 1;
    finRdvMinutes = finRdvMinutes -60;
}


// 2e étape: la fin du RDV est-elle avant la fin de journée ?
// Afficher si le RDV est OK ou impossible

if (finRdvHeures < finJourneeHeures ||
    (finRdvHeures === finJourneeHeures
        && finRdvMinutes < finJourneeMinutes)) {
            console.log("RDV OK");
        } else {
            console.log("RDV impossible");
        }
 
// 3e étape: afficher l'heure de fin du RDV avec cas des minutes inférieures à 10

if (finRdvMinutes < 10){

    console.log ("Le RDV se terminera à " + finRdvHeures + "h0" + finRdvMinutes);
} else{
    console.log ("Le RDV se terminera à " + finRdvHeures + "h" + finRdvMinutes);
}

// Autre solution en calculant la durée totale possible d'un RDV et comparer avec la durée

/*let dureeMaxRdv = (finJourneeHeures - debutRdvheures) * 60 + (finJourneeMinutes - debutRdvMinutes);

if (duree < dureeMaxRdv) {
    console.log("RDV OK");
  } else {
    console.log("RDV impossible");
  } */


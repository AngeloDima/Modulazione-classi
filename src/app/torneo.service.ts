import { Injectable } from '@angular/core';
import { Torneo, TorneoSquadra } from './models/torneo';
import { Giocatore } from './models/giocatore';
import { Squadra } from './models/squadra';
import { Partita } from './models/partita';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  constructor() { }

  creaTorneoEsempio(): Torneo {

    //creazione torneo
    let t = new Torneo("Torneo sociale 2023");

    //creazione squadra "I Rossi con giocatori"
    let mario = new Giocatore("Mario", "Rossi", "1", 0);
    let gianna = new Giocatore("Gianna", "Verdi", "2", 0);
    let sqRossiVerdi = new Squadra("I Rossi");
    sqRossiVerdi.giocatori.push(mario, gianna);

    //creazione squadra "I Dragoni con giocatori"
    let nicola = new Giocatore("Nicola", "Bianchi", "101", 0);
    let chiara = new Giocatore("Chiara", "Rossi", "100", 0);
    let sqDragoni = new Squadra("I Dragoni");
    sqDragoni.giocatori.push(nicola, chiara);

    //iscrizione delle squadre al torneo
    t.squadre.push(new TorneoSquadra(sqRossiVerdi, 0))
    t.squadre.push(new TorneoSquadra(sqDragoni, 0))

    //creazione partite
    let partitaAndata = new Partita(sqRossiVerdi, sqDragoni, 1686559577)
    let partitaRitorno = new Partita(sqDragoni, sqRossiVerdi, 1686646953)

    //aggiunta partita al torneo
    t.partite.push(partitaAndata, partitaRitorno)

    return t;

  }

}

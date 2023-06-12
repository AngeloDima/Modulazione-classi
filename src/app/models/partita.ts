import { Squadra } from "./squadra";

export class Partita {

  squadraCasa: Squadra;
  squadraTransferta: Squadra;
  data: number;
  punteggioCasa: number;
  punteggioTransferta: number;
  // risultato: Risultati;

  constructor(squadraCasa: Squadra, squadraTransferta: Squadra, data: number) {
    this.squadraCasa = squadraCasa;
    this.squadraTransferta = squadraTransferta;
    this.data = data;
    this.punteggioCasa = 0
    this.punteggioTransferta = 0
    // this.risultato = Risultati.Pareggio
  }

}


export enum Risultati {

  Casa,
  Transferta,
  Pareggio

}

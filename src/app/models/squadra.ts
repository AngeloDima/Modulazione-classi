import { Giocatore } from "./giocatore";

export class Squadra {

  nome: string;
  punteggio: number;
  giocatori: Giocatore[];

  constructor(nome: string) {
    this.nome = nome
    this.punteggio = 0
    this.giocatori = []
  }
}

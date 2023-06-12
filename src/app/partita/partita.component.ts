import { Component, Input } from '@angular/core';
import { Partita } from '../models/partita';

@Component({
  selector: 'app-partita',
  templateUrl: './partita.component.html',
  styleUrls: ['./partita.component.scss']
})
export class PartitaComponent {


  @Input()
  partita?: Partita
}

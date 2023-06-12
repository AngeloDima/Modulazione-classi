import { Component, OnInit } from '@angular/core';
import { TorneoService } from '../torneo.service';
import { Torneo } from '../models/torneo';

@Component({
  selector: 'app-torneo-detail',
  templateUrl: './torneo-detail.component.html',
  styleUrls: ['./torneo-detail.component.scss']
})
export class TorneoDetailComponent implements OnInit {

  torneo?: Torneo;

  constructor(private torneoService: TorneoService) { }

  ngOnInit(): void {
    this.torneo = this.torneoService.creaTorneoEsempio();
  }




}

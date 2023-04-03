import { Component, Input, OnInit } from '@angular/core';
import { Fighter } from '../../pages/game/Fighter'

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input() fighter !: Fighter;


  constructor() {
   }

  ngOnInit(): void {
  }

}

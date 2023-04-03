import { Component, OnInit } from '@angular/core';
import { Fighter } from './Fighter';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  rock : Fighter = Fighter.rock;
  paper : Fighter = Fighter.paper;
  scissors : Fighter = Fighter.scissors;

  userName: string = "User";
  aiName : string = "Ai";
  
  constructor() { }

  ngOnInit(): void {
  }

}

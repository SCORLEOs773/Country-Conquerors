import { Component, OnInit } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-troops',
  templateUrl: './troops.component.html',
  styleUrls: ['./troops.component.css'],
})
export class TroopsComponent implements OnInit {
  troops = [
    { name: 'Soldier', hp: 100, damage: 10, cost: { gold: 50, food: 30 } },
    { name: 'Archer', hp: 80, damage: 15, cost: { gold: 70, food: 40 } },
    // Add more troops as needed
  ];

  constructor(private gameService: GameService) {}

  ngOnInit() {}

  trainTroop(troop: any) {
    for (let resource in troop.cost) {
      this.gameService.incrementResource(resource, -troop.cost[resource]);
    }
    // Additional logic to handle troop training
  }
}

import { Component, OnInit } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css'],
})
export class BuildingsComponent implements OnInit {
  buildings = [
    { name: 'Farm', cost: { wood: 100, stone: 50 } },
    { name: 'Barracks', cost: { wood: 200, stone: 100 } },
    // Add more buildings as needed
  ];

  constructor(private gameService: GameService) {}

  ngOnInit() {}

  constructBuilding(building: any) {
    for (let resource in building.cost) {
      this.gameService.incrementResource(resource, -building.cost[resource]);
    }
    // Additional logic to handle building construction
  }
}

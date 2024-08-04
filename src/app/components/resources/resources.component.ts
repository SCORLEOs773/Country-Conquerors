import { Component, OnInit } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
})
export class ResourcesComponent implements OnInit {
  resourceNames = [
    'gold',
    'food',
    'wood',
    'stone',
    'iron',
    'population',
    'researchPoints',
  ];
  resourceValues: { [key: string]: number } = {};

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.resourceNames.forEach((resource) => {
      this.gameService.getResource(resource).subscribe((value: number) => {
        this.resourceValues[resource] = value;
      });
    });

    // Increment resources regularly
    setInterval(() => {
      this.incrementAllResources();
    }, 60000); // Increment every minute
  }

  incrementAllResources() {
    this.resourceNames.forEach((resource) => {
      this.gameService.incrementResource(resource, 100); // Example increment
    });
  }

  incrementResources(resource: string, amount: number) {
    this.gameService.incrementResource(resource, amount);
  }
}

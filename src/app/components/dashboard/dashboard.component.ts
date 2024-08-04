import { Component, OnInit } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  countryName: string = 'Your Country'; // Placeholder, can be set dynamically
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
  }
}

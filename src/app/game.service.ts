import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Resources {
  gold: BehaviorSubject<number>;
  food: BehaviorSubject<number>;
  wood: BehaviorSubject<number>;
  stone: BehaviorSubject<number>;
  iron: BehaviorSubject<number>;
  population: BehaviorSubject<number>;
  researchPoints: BehaviorSubject<number>;
  [key: string]: BehaviorSubject<number>; // Index signature
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private resources: Resources = {
    gold: new BehaviorSubject<number>(0),
    food: new BehaviorSubject<number>(0),
    wood: new BehaviorSubject<number>(0),
    stone: new BehaviorSubject<number>(0),
    iron: new BehaviorSubject<number>(0),
    population: new BehaviorSubject<number>(0),
    researchPoints: new BehaviorSubject<number>(0)
  };

  constructor() { }

  getResource(resourceName: string) {
    return this.resources[resourceName].asObservable();
  }

  incrementResource(resourceName: string, amount: number) {
    const current = this.resources[resourceName].value;
    this.resources[resourceName].next(current + amount);
  }
}

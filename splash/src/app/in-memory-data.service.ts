import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Splash } from './models/splash';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const splashes = [
      { id: 11, body: 'this is a test body', title: 'Dr Nice' },
      { id: 12, body: 'this is a test body', title: 'Narco' },
      { id: 13, body: 'this is a test body', title: 'Bombasto' },
      { id: 14, body: 'this is a test body', title: 'Celeritas' },
      { id: 15, body: 'this is a test body', title: 'Magneta' },
      { id: 16, body: 'this is a test body', title: 'RubberMan' },
      { id: 17, body: 'this is a test body', title: 'Dynama' },
      { id: 18, body: 'this is a test body', title: 'Dr IQ' },
      { id: 19, body: 'this is a test body', title: 'Magma' },
      { id: 20, body: 'this is a test body', title: 'Tornado' },
    ];
    return { splashes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  generateId(heroes: Splash[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}

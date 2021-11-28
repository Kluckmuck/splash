import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Splash } from '../../models/splash';

@Component({
  selector: 'app-splash-card',
  templateUrl: './splash-card.component.html',
  styleUrls: ['./splash-card.component.css'],
})
export class SplashCardComponent {
  @Input() item: Splash | undefined;

  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(SnackComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-component.html',
  styles: [
    `
      .example-pizza-party {
        color: hotpink;
      }
    `,
  ],
})
export class SnackComponent {}

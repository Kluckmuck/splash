import { Component, Input, OnInit } from '@angular/core';
import { Splash } from '../../models/splash';

@Component({
  selector: 'app-splash-card',
  templateUrl: './splash-card.component.html',
  styleUrls: ['./splash-card.component.css'],
})
export class SplashCardComponent implements OnInit {
  @Input() item: Splash | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log(this.item);
  }
}

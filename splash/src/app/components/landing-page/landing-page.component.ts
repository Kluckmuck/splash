import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Splash } from '../../models/splash';
import { User } from '../../models/user';
import { SplashService } from '../../services/splash.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor(private splashService: SplashService) {}

  splashes: Splash[] = [];
  followers: User[] = [];
  sorted: Splash[] = [];
  date: Date = new Date('11/05/2021');

  ngOnInit(): void {
    this.getSplashes();
  }

  getSplashes(): void {
    this.splashService
      .getSplashes()
      .pipe(
        map((splashes) =>
          splashes.sort(
            (a, b) =>
              new Date(b.created).getTime() - new Date(a.created).getTime()
          )
        )
      )
      .subscribe((splashes) => {
        this.sorted = splashes.sort(this.compare);
        console.log(this.sorted);
      });
  }

  getFollowers(): void {
    this.splashService.getFollowers().subscribe((followers) => {
      this.followers = followers;
    });
  }

  compare(a: Splash, b: Splash) {
    if (a.created < b.created) {
      return -1;
    }
    if (a.created > b.created) {
      return 1;
    }
    return 0;
  }
}

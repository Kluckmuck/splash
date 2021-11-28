import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.getSplashes();
  }

  getSplashes(): void {
    this.splashService.getSplashes().subscribe((splashes) => {
      this.splashes = splashes;
    });
  }

  getFollowers(): void {
    this.splashService.getFollowers().subscribe((followers) => {
      this.followers = followers;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { SplashService } from '../../services/splash.service';

@Component({
  selector: 'app-followers-list',
  templateUrl: './followers-list.component.html',
  styleUrls: ['./followers-list.component.css'],
})
export class FollowersListComponent implements OnInit {
  constructor(private splashService: SplashService) {}

  followers: User[] = [];
  show: boolean = false;

  ngOnInit(): void {
    this.splashService.getFollowers().subscribe((users) => {
      this.followers = users;
    });
  }

  onClickShowButton(): void {
    this.show = !this.show;
  }
}

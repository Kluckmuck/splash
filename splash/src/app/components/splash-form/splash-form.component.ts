import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-splash-form',
  templateUrl: './splash-form.component.html',
  styleUrls: ['./splash-form.component.css'],
})
export class SplashFormComponent implements OnInit {
  constructor() {}

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  ngOnInit(): void {}
}

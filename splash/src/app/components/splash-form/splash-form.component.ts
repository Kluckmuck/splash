import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-splash-form',
  templateUrl: './splash-form.component.html',
  styleUrls: ['./splash-form.component.css'],
})
export class SplashFormComponent implements OnInit {
  constructor() {}

  splashForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.splashForm.value);
  }
}

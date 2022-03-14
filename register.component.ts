import { Component, OnInit } from '@angular/core';

import { user } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  
})
export class RegisterComponent implements OnInit {

  constructor() { }
  topics=["facebook","Twitter","Google"];
  user =new user('Abdelhameid','abdalhamedmohammed2014@gmail','11111111111','11111111111',' ')

  ngOnInit(): void {
  }

}

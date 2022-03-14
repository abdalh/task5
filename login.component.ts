import { Component, OnInit } from '@angular/core';

import { login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  login = new login ('abdalhamedmohammed2014@gmail','11111111111')

  ngOnInit(): void {
  }

}

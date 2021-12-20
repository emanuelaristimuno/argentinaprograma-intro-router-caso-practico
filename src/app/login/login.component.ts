import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';             // agregar estas lineas para que puedas usar route 



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}
  sendMeHome() {
    this.router.navigate(['']);
  }

}


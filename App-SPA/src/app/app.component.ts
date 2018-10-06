import { AuthService } from './_services/AuthService.service';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) { }
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  ngOnInit() {
    this.decodedToken = this.authService.decodeToken();
  }

  getToken() {
    this.authService.getAndSaveToken();
  }

  tokenExist() {
    this.decodedToken = this.authService.decodeToken();
    return this.authService.tokenExistAndNotExpire();
  }
}

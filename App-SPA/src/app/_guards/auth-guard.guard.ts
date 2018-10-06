import { AuthService } from './../_services/AuthService.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
    private router: Router) { }
  canActivate(): boolean {
    if (this.authService.tokenExistAndNotExpire()) {
      console.log('You can be here.');
      return true;
    }
    this.router.navigate(['']);
    console.log('You can not be here!');
    return false;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
    baseUrl = 'http://localhost:5000/';
    jwtHelper = new JwtHelperService();
    constructor(private http: HttpClient) { }

    getAndSaveToken() {
        this.http.post(this.baseUrl + 'api/auth', null).subscribe((response: any) => {
            if (response) {
                localStorage.setItem('token', response.token);
            }
        });
    }

    tokenExistAndNotExpire() {
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }

    decodeToken() {
        const token = localStorage.getItem('token');
        if (token) {
            return this.jwtHelper.decodeToken(token);
        }
    }
}

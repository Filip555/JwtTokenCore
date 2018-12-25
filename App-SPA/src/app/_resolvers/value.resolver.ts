import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ValueService } from '../_services/Value.service';

@Injectable()
export class ValueResolver implements Resolve<string> {
    constructor(private valueService: ValueService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<string> {
        return this.valueService.getValue(route.params['id']).pipe(
            catchError(error => {
                console.log('Error');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}

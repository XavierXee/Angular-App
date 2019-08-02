import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthenticationService } from '@app/services';
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })

export class AuthenticationGuard implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean|UrlTree> | Promise<boolean|UrlTree> {
        const currentCustomer = this.authenticationService.currentCustomerValue;
        if (currentCustomer) {
            return true;
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}

import {Component, OnInit} from '@angular/core';

import { AuthenticationService } from '@app/services';
import { Router } from "@angular/router";
import { Customer } from "@app/models";

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

    private currentCustomer: Customer;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentCustomer.subscribe(x => this.currentCustomer = x);
    }

    logout(): void {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    }

}

import { Component } from '@angular/core';

import { AuthenticationService } from '@app/services';
import { Router } from "@angular/router";

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    logout(): void {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    }

}

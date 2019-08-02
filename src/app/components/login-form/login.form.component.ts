import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '../../services';

@Component({
    selector: 'login-form-component',
    templateUrl: 'login.form.component.html',
    styleUrls: ['./login.form.component.scss']
})

export class LoginFormComponent implements OnInit {

    private loginForm: FormGroup;
    private loading: Boolean;
    private submitted: Boolean;
    private returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
    ) {
        this.loading = false;
        this.submitted = false;
        if (this.authenticationService.currentCustomerValue) {
            this.router.navigate(['/']);
        }
    }


    get form(): any {
        return this.loginForm.controls;
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/products';
    }

    onSubmit(): void {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        this.authenticationService.login(this.form.username.value, this.form.password.value)
            .pipe(first())
            .subscribe(data => {
                this.router.navigate([this.returnUrl]);
            },error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }

}

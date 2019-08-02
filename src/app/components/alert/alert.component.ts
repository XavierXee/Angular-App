import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertService } from '@app/services';

@Component({
    selector: 'alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['./alert.component.scss']
})

export class AlertComponent implements OnInit, OnDestroy {

    private subscription: Subscription;
    private message: string;

    constructor(private alertService: AlertService) { }

    ngOnInit(): void {
        this.subscription = this.alertService.getMessage().subscribe(message => {
            this.message = message;
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from "@environments/environment";
import { Customer } from '@app/models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private currentCustomerSubject: BehaviorSubject<Customer>;
    public currentCustomer: Observable<Customer>;

    constructor(private http: HttpClient) {
        this.currentCustomerSubject = new BehaviorSubject<Customer>(JSON.parse(localStorage.getItem('currentCustomer')));
        this.currentCustomer = this.currentCustomerSubject.asObservable();
    }

    public get currentCustomerValue(): Customer {
        return this.currentCustomerSubject.value;
    }

    login(username: string, password: string): Observable<Customer> {
        return this.http.post<any>(`${environment.apiUrl}/customer/authenticate`, { username, password })
            .pipe(map(user => {
                if (user && user.token) {
                    localStorage.setItem('currentCustomer', JSON.stringify(user));
                    this.currentCustomerSubject.next(user);
                }

                return user;
            }));
    }

    logout(): void {
        localStorage.removeItem('currentCustomer');
        this.currentCustomerSubject.next(null);
    }
}

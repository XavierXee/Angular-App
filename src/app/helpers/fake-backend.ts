import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import * as registeredCustomers from "@app/data/customers.json";
import * as products from "@app/data/products.json";
import { Customer, Product } from "@app/models";

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    registeredCustomers: Customer[] = registeredCustomers.customers || registeredCustomers['default'].customers;
    products: Product[] = products.products || products['default'].products;

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        function handleRoute(): Observable<HttpResponse<any>|HttpEvent<any>> {
          switch (true) {
            case url.endsWith('/customer/authenticate') && method === 'POST':
              return authenticate();
            case url.endsWith('/products') && method === 'GET':
              return getProducts();
            default:
              return next.handle(request);
          }
        }

        const authenticate = (): Observable<HttpResponse<any>> => {
            const { username, password } = body;
            const customer = this.registeredCustomers.find(customer => customer.name === username && customer.password === password);

            if (!customer) return error('Username or password is incorrect');

            return ok({
                id: 0,
                name: customer.name,
                token: 'fake-jwt-token'
            });
        };

        const getProducts = (): Observable<HttpResponse<any>> => {
            if (!products) return error('Error retrieving products list');
            return ok(this.products);
        };

        const ok = (body?): Observable<HttpResponse<any>> => {
          return of(new HttpResponse({ status: 200, body }))
        };

        const error = (message): Observable<never> => {
            return throwError({ error: { message } });
        };

        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());
    }
}

export const fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from "@environments/environment";
import { Product } from '@app/models';

@Injectable({ providedIn: 'root' })
export class ProductsService {

    public products: Observable<Product[]>;

    constructor(private http: HttpClient) {
        this.getProducts();
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<any>(`${environment.apiUrl}/products`)
            .pipe(map(products => {
                if (!products) {
                } else {
                    return products;
                }
            }));
    }
}

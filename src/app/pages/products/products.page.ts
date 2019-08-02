import { Component, OnInit } from '@angular/core';

import { AuthenticationService, ProductsService } from '@app/services';

import { Customer, Product } from "@app/models";

@Component({
    templateUrl: 'products.page.html',
    styleUrls: ['./../page.scss']
})
export class ProductsPage implements OnInit {

    private products: Product[];
    private currentCustomer: Customer;

    constructor(private authenticationService: AuthenticationService, private productsService: ProductsService) {
        this.productsService.getProducts().subscribe(products => this.products = products)
    }

    ngOnInit(): void {
        this.currentCustomer = this.authenticationService.currentCustomerValue;
    }

}

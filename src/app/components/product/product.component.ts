import { Input } from '@angular/core';

import { Component } from '@angular/core';
import { Product } from "@app/models";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {

    @Input('product') product: Product;

}

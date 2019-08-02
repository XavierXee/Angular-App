import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsPage } from '@app/pages';
import { Product } from "@app/models";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ProductComponent } from "@app/components";
import { MockProduct } from "@app/mocks";

describe('ProductsPage', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule
            ],
            providers: [
                ProductsPage,
                { provide: Product, useClass: MockProduct }
            ],
            declarations: [
                ProductComponent,
                ProductsPage
            ],
        }).compileComponents();
    }));

    it('should create the product page', () => {
        const fixture = TestBed.createComponent(ProductsPage);
        const productPage = fixture.debugElement.componentInstance;
        expect(productPage).toBeTruthy();
    });

});

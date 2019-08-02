import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductComponent } from '@app/components';
import { Product } from "@app/models";
import { MockProduct } from "@app/mocks";

describe('ProductComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            providers: [
                ProductComponent,
                { provide: Product, useClass: MockProduct }
            ],
            declarations: [
                ProductComponent
            ],
        }).compileComponents();
    }));

    it('should create the product component', () => {
        const fixture = TestBed.createComponent(ProductComponent);
        const productComponent = fixture.debugElement.componentInstance;
        expect(productComponent).toBeTruthy();
    });

});

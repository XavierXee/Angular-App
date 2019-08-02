import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertComponent } from '@app/components';

describe('AlertComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AlertComponent
            ],
        }).compileComponents();
    }));

    it('should create the alert component', () => {
        const fixture = TestBed.createComponent(AlertComponent);
        const alert = fixture.debugElement.componentInstance;
        expect(alert).toBeTruthy();
    });

});

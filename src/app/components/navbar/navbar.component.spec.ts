import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from '@app/components';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('NavbarComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule
            ],
            declarations: [
                NavbarComponent
            ],
        }).compileComponents();
    }));

    it('should create the nav bar component', () => {
        const fixture = TestBed.createComponent(NavbarComponent);
        const navBar = fixture.debugElement.componentInstance;
        expect(navBar).toBeTruthy();
    });

});

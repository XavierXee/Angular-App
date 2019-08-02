import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPage } from '@app/pages';
import { LoginFormComponent } from "@app/components";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from "@angular/common/http/testing";


describe('LoginPage', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                ReactiveFormsModule,
                RouterTestingModule
            ],
            declarations: [
                LoginFormComponent,
                LoginPage
            ],
        }).compileComponents();
    }));

    it('should create the login page', () => {
        const fixture = TestBed.createComponent(LoginPage);
        const loginPage = fixture.debugElement.componentInstance;
        expect(loginPage).toBeTruthy();
    });

});

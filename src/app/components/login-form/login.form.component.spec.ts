import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginFormComponent } from '@app/components';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('LoginFormComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
                ReactiveFormsModule
            ],
            declarations: [
                LoginFormComponent
            ],
        }).compileComponents();
    }));

    it('should create the login form component', () => {
        const fixture = TestBed.createComponent(LoginFormComponent);
        const loginFormComponent = fixture.debugElement.componentInstance;
        expect(loginFormComponent).toBeTruthy();
    });

});

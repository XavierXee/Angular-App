import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { routing }        from './app-routing.module';

import { AppComponent }  from './app.component';
import { AlertComponent, NavbarComponent, LoginFormComponent, ProductComponent } from './components';

import { LoginPage, ProductsPage } from './pages';

import { fakeBackendProvider, ErrorInterceptor } from './helpers';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        AlertComponent,
        ProductComponent,
        LoginFormComponent,
        LoginPage,
        ProductsPage
    ],
    exports: [
        ReactiveFormsModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }

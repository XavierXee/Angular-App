import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './pages';
import { ProductsPage } from './pages';
import { AuthenticationGuard } from './guards';

const appRoutes: Routes = [
    { path: '', component: LoginPage,  },
    { path: 'products', component: ProductsPage, canActivate: [AuthenticationGuard] },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);

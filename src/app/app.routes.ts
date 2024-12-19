import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/dashboard/product/product.component';
import { LayoutComponent } from './pages/dashboard/layout/layout.component';
import { ProductListComponent } from './pages/dashboard/product-list/product-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Home page
    { path: 'login', component: LoginComponent }, // Login page
   

  {
    path: '', component: LayoutComponent, children: [
        { path: 'Dashboard', component: DashboardComponent },
        { path: 'Product', component: ProductComponent },
        { path: 'ProductList', component: ProductListComponent },
        // Add other routes here
    ]
},

  { path: '**', redirectTo: '' }, // Redirect to home for any unknown routes

 

];

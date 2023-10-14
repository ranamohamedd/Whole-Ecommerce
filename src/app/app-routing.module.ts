import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { ProductsComponent } from './products/products.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"home", canActivate:[authGuard], component:HomeComponent},
  {path:"products",canActivate:[authGuard], component:ProductsComponent},
  {path:"brands",canActivate:[authGuard], component:BrandsComponent},
  {path:"categoryItems",canActivate:[authGuard], component:CategoriesComponent},
  {path:"productDetails/:id",canActivate:[authGuard], component:ProductDetailsComponent},
  {path:"settings",canActivate:[authGuard], loadChildren:()=>import('./settings/settings.module').then((x)=>x.SettingsModule)},
  { path: "cart",canActivate: [authGuard], loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },


  {path:"signup", component:SignupComponent},
  {path:"login", component:LoginComponent},
  {path:"checkout/:cartId", component:CheckoutComponent},
  {path:"allorders",component:OrdersComponent},
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },



  {path:"**", component:NotfoundComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

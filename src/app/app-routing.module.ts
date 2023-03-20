import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './shared/components/home/home.component';
import { EditProductComponent } from './shared/components/products/edit-product/edit-product.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { UsersComponent } from './shared/components/users/users.component';
import { LoginComponent } from './shared/login/login.component';
import { AuthGuard } from './shared/services/auth-guard-service';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', canActivate: [AuthGuard], component: HomeComponent},

  {path: 'users', canActivate: [AuthGuard], component:UsersComponent,
  children:[
    {path: ':id', component:UserComponent},
  ]
},
  {path: 'products', component:ProductsComponent, canActivateChild:[AuthGuard],
  children : [
    {path: ':id/edit',  component : EditProductComponent},
    {path: ":id", component : ProductComponent}
  ]
},
  {
    path : 'page-not-found', component :PageNotFoundComponent 
  } ,
  {
    path:'**', redirectTo:'page-not-found'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

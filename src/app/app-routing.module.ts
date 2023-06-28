import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './auth/auth.guard';
import { PropertiesComponent } from './properties/properties.component';
import { CrudComponent } from './crud/crud.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  // {path:"",component:UpdateComponent}
  {path:"",redirectTo:"login", pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"layout",component:LayoutComponent,canActivate:[AuthGuard],
  children:[
    
    {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
    {path:"login",component:LoginComponent,canActivate:[AuthGuard]},
    
    {path:"update:/id",component:UpdateComponent,canActivate:[AuthGuard]},
    {path:"table",component:TableComponent,canActivate:[AuthGuard]},
    {path:"crud",component:CrudComponent,canActivate:[AuthGuard]},
    {path:"pro",component:PropertiesComponent,canActivate:[AuthGuard]}

  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

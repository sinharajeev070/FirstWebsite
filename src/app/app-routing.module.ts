import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
                        {path:"",component:MainComponent},
                        {path:"home",component:HomeComponent},
                        {path:"about",component:AboutComponent},
                        {path:"login",component:LoginComponent},
                        {path:"contact",component:ContactComponent},
                        {path:"**",component:ErrorComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

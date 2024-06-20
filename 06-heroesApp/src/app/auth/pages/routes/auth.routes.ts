import { Routes } from "@angular/router";
import { LayoutPageAuthComponent } from "../layout-page/layout-page.component";
import { LoginPageComponent } from "../login-page/login-page.component";
import { RegisterPageComponent } from "../register-page/register-page.component";

export const authChilds: Routes = [
  {
    path: '',
    component: LayoutPageAuthComponent,
    children: [
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent },
      { path: '**', redirectTo: 'login' }
    ]
  }

]

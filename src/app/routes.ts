import { Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component"
import { LibraryComponent } from "./library/library.component"

const AppRoutes : Routes = [
  { path : "login", component : LoginComponent },
  { path : "library", component : LibraryComponent },
  { path : "", redirectTo : "/login", pathMatch: 'full' }
]


export {
  AppRoutes
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router";

import { AppRoutes } from "./routes";

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { LoginComponent } from './login/login.component';
import { LibraryComponent } from './library/library.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    WrapperComponent,
    LoginComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes, { enableTracing : true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

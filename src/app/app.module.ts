import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginComponent } from './components/login/login.component';

import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './components/material/material.module';
import { NavBarComponent } from './components/navigation/navbar/navbar.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { HeaderModule } from './components/navigation/header/header.component';
import { ComponentSidenavModule } from './components/navigation/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    SidenavListComponent,
    LayoutComponent,
    RegistrationComponent
  ],
  entryComponents: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    ComponentSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

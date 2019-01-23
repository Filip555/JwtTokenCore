import { UserService } from './_services/user.service';
import { ValueResolver } from './_resolvers/value.resolver';
import { AuthGuard } from './_guards/auth-guard.guard';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './_services/AuthService.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { PrivateComponent } from './Private/Private.component';
import { ValueComponent } from './Value/Value.component';
import { ProfileComponent } from './Profile/Profile.component';
import { ProfileEditComponent } from './Profile-edit/Profile-edit.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      PrivateComponent,
      ValueComponent,
      ProfileComponent,
      ProfileEditComponent,
      NavComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      AuthService,
      UserService,
      AuthGuard,
      ValueResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

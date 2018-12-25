import { ValueResolver } from './_resolvers/value.resolver';
import { AuthGuard } from './_guards/auth-guard.guard';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './_services/AuthService.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { PrivateComponent } from './Private/Private.component';
import { ValueComponent } from './Value/Value.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      PrivateComponent,
      ValueComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [
      AuthService,
      AuthGuard,
      ValueResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

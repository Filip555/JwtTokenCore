import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateComponent } from './Private/Private.component';
import { HomeComponent } from './Home/Home.component';
import { AuthGuard } from './_guards/auth-guard.guard';
import { ValueComponent } from './Value/Value.component';
import { ValueResolver } from './_resolvers/value.resolver';
import { ProfileComponent } from './Profile/Profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'private', component: PrivateComponent, canActivate: [AuthGuard] },
  { path: 'value/:id', component: ValueComponent, resolve: { value: ValueResolver } },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
  // {
  //   path: '',
  //   runGuardsAndResolvers: 'always',
  //   canActivate: [AuthGuard],
  //   children: [
  //     { path: 'private', component: PrivateComponent }
  //   ]
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


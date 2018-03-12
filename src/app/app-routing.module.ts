import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const AppRoutes: Routes = [
  { path: '', redirectTo: 'app' },
  { path: 'app', component: AppComponent },
  { path: 'pages', component: AppComponent}

];

export const AppRoutingModule = RouterModule.forRoot(AppRoutes, {useHash: true});

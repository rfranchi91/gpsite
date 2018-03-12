import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page1Component } from './page1/page1.component';


export const PagesRoutes: Routes = [
  {
    path: 'pages',
    component: AppComponent,
    children: [
        { path: '', redirectTo: '/app.component', pathMatch: 'full' },
        { path: 'page1', component:  Page1Component },
        { path: 'page2', component:  Page2Component },
        { path: 'page3', component:  Page3Component }
        ]
    }
];

export const PagesRoutingModule = RouterModule.forChild(PagesRoutes);
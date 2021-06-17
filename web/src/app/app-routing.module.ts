import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BusinessComponent } from './pages/business/business.component';

const routes: Routes = 
  [{
    path: '',
    component: HomeComponent,
  },
  {
    path: 'business',
    component: AdminComponent,
  },
  {
    path: 'admin',
    component: BusinessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

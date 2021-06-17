import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BusinessComponent } from './pages/business/business.component';
import { CvComponent } from './pages/cv/cv.component';
import { MainComponent } from './components/main/main.component';
import { FormCvComponent } from './pages/form-cv/form-cv.component';

const routes: Routes = 
  [
    {
      path: '',
      component: HomeComponent,
      children: [
        {
          path: 'cv',
          component: MainComponent,
        },
      ]
    },
    {
      path: 'client',
      component: HomeComponent,
 
      children: [
        {
          path: 'cv',
          component: FormCvComponent,
          outlet: 'client',
        },
      ]
    },
    {
      path: '**',
      component: HomeComponent,
      children: [
        {
          path: '',
          component: MainComponent,
        },
      ]
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

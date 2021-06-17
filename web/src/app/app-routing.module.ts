import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BusinessComponent } from './pages/business/business.component';
import { MainComponent } from './components/main/main.component';
import { FormCvComponent } from './pages/form-cv/form-cv.component';
import { ListComponent } from './pages/list/list.component';
import { MainBussinesComponent } from './components/main-bussines/main-bussines.component';
import { MainAdminComponent } from './components/main-admin/main-admin.component';
import { CvComponent } from './pages/cv/cv.component';
import { ManageComponent } from './components/manage/manage.component';

const routes: Routes = 
  [
    {
      path: '',
      component: HomeComponent,
      children: [
        {
          path: '',
          component: MainComponent,
        },
      ]
    },
    {
      path: 'client',
      component: HomeComponent,
      children: [
        {
          path: 'create',
          component: FormCvComponent,
        },
        {
          path: 'manage',
          component: ManageComponent 
        },
        {
          path: 'cv',
          component: CvComponent,
        },
        {
          path: 'intro',
          component: MainComponent,
        },
        {
          path: 'login',
          component: FormCvComponent,
        },
        {
          path: 'register',
          component: FormCvComponent,
        },
      ]
    },
    {
      path: 'business',
      component: BusinessComponent,
      children: [
        {
          path: '',
          component: MainBussinesComponent,
        },
        {
          path: 'listCv',
          component: ListComponent
        },
        {
          path: 'cv',
          component: CvComponent
        },
        {
          path: 'manage',
          component: ListComponent
        },
        {
          path: 'info',
          component: ListComponent
        },
        {
          path: 'adlogin',
          component: ListComponent
        },
        {
          path: 'regis',
          component: ListComponent
        },
        {
          path: 'login',
          component: ListComponent
        },
      ]
    },
    {
      path: 'admin',
      component: AdminComponent,
      children: [
        {
          path: '',
          component: MainAdminComponent,
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

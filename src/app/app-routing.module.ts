import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './_helpers/auth.guard';
import { AccessDeniedComponent } from './errors/access-denied/access-denied.component';
import { AdminComponent } from './admin/admin.component';
import { LandingComponent } from './landing/landing.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'home',
    component: SideNavComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [authGuard],
        data: { roles: ['ROLE_ADMIN', 'ROLE_EDITOR', 'ROLE_VIEWER', 'ROLE_MANAGER'] },
      },
    ],
  },
  {
    path: 'admin',
    component: SideNavComponent,
    children: [
      {
        path: '',
        component: AdminComponent,
        canActivate: [authGuard],
        data: { roles: ['ROLE_ADMIN', 'ROLE_EDITOR', 'ROLE_VIEWER', 'ROLE_MANAGER'] },
      },
      {
        path: 'projects',
        component: ProjectListComponent,
        canActivate: [authGuard],
        data: { roles:['ROLE_ADMIN', 'ROLE_EDITOR', 'ROLE_VIEWER', 'ROLE_MANAGER'] },
      },
      {
        path: 'projects/:id',
        component: ProjectDetailComponent,
        canActivate: [authGuard],
        data: { roles:['ROLE_ADMIN', 'ROLE_EDITOR', 'ROLE_VIEWER', 'ROLE_MANAGER'] },
      },
      {
        path: 'create-project',
        component: ProjectFormComponent,
        canActivate: [authGuard],
        data: { roles: ['ROLE_ADMIN', 'ROLE_EDITOR', 'ROLE_VIEWER', 'ROLE_MANAGER'] },
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'forbidden',
    component: AccessDeniedComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

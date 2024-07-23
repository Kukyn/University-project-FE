import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserDetailEditComponent } from './pages/user-detail-edit/user-detail-edit.component';

const routes: Routes = [
  {
    path: '',
    component: UserDetailComponent,
  },
  {
    path: ':id',
    component: UserDetailComponent,
  },
  {
    path: ':id/edit',
    component: UserDetailEditComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}

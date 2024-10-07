import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';

const routes: Routes = [
  { path: '', component: ProfileListComponent },
  { path: 'create', component: ProfileFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilesRoutingModule {}

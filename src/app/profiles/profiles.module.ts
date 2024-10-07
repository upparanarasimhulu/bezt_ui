import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProfileListComponent,
    ProfileFormComponent
  ],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class ProfilesModule {}

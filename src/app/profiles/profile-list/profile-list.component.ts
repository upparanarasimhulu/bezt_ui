import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.model';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
})
export class ProfileListComponent implements OnInit {
  profiles: Profile[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.loadProfiles();
  }

  loadProfiles(): void {
    this.profileService.getProfiles().subscribe((data) => {
      this.profiles = data;
    });
  }

  deleteProfile(id: number): void {
    this.profileService.deleteProfile(id).subscribe(() => {
      this.loadProfiles(); // Reload profiles after deletion
    });
  }
}

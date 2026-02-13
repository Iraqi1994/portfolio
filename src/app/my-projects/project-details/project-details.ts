import { Component, Input } from '@angular/core';

type projectDetailsType = {
  aboutTheProject: string;
  workProcess: string;
  workExperience: string;
  projectImage: string;
};

@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {
  @Input() projectData!: projectDetailsType;
}

import { Component } from '@angular/core';
import { ProjectDetails } from './project-details/project-details';

type projectDetailsType = {
  aboutTheProject: string;
  workProcess: string;
  workExperience: string;
  projectImage: string;
};

@Component({
  selector: 'app-my-projects',
  imports: [ProjectDetails],
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.scss',
})
export class MyProjects {
  daBubbleDetails: projectDetailsType = {
    aboutTheProject:
      'It revolutionizes team communication and collaboration with its intuitive interface and powerful features.',
    workProcess:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cumque voluptate natus placeat unde laboriosam quam officia ducimus sunt, molestias eveniet dolores exercitationem maiores tempore aspernatur. Expedita ratione fugit voluptatibus?',
    workExperience:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cumque voluptate natus placeat unde laboriosam quam officia ducimus sunt, molestias eveniet dolores exercitationem maiores tempore aspernatur. Expedita ratione fugit voluptatibus?',
    projectImage: 'img/screenshot-dabubble.png',
  };
}

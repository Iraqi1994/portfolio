import { Component, signal } from '@angular/core';
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
  activeProjectIndex = signal(0);

  setActiveProject(index: number) {
    this.activeProjectIndex.set(index);
  }

  daBubbleDetails: projectDetailsType = {
    aboutTheProject:
      'It revolutionizes team communication and collaboration with its intuitive interface and powerful features.',
    workProcess:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cumque voluptate natus placeat unde laboriosam quam officia ducimus sunt, molestias eveniet dolores exercitationem maiores tempore aspernatur. Expedita ratione fugit voluptatibus?',
    workExperience:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cumque voluptate natus placeat unde laboriosam quam officia ducimus sunt, molestias eveniet dolores exercitationem maiores tempore aspernatur. Expedita ratione fugit voluptatibus?',
    projectImage: 'img/screenshot-dabubble.png',
  };

  elPolloLocoDetails: projectDetailsType = {
    aboutTheProject:
      'It revolutionizes team communication and collaboration with its intuitive interface and powerful features 2.',
    workProcess:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cumque voluptate natus placeat unde laboriosam quam officia ducimus sunt, molestias eveniet dolores exercitationem maiores tempore aspernatur. Expedita ratione fugit voluptatibus?',
    workExperience: '',
    projectImage: 'img/screenshot-dabubble.png',
  };

  joinDetails: projectDetailsType = {
    aboutTheProject:
      'It revolutionizes team communication and collaboration with its intuitive interface and powerful features 3.',
    workProcess:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cumque voluptate natus placeat unde laboriosam quam officia ducimus sunt, molestias eveniet dolores exercitationem maiores tempore aspernatur. Expedita ratione fugit voluptatibus?',
    workExperience:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cumque voluptate natus placeat unde laboriosam quam officia ducimus sunt, molestias eveniet dolores exercitationem maiores tempore aspernatur. Expedita ratione fugit voluptatibus?',
    projectImage: 'img/screenshot-dabubble.png',
  };

  iotDashboardDetails: projectDetailsType = {
    aboutTheProject:
      'This data-intensive web app combines commissioning and monitoring of a PV system. It provides live values of production and consumption and tracks errors before the customer notices them. It is a unified dashboard that allows every employee to monitor or depending on their role to even perform actions like OS updates or rebooting the system.',
    workProcess:
      'The vision was to develop one single application that unifies all tasks instead of maintaining multiple apps for each domain. The most important part was the research. It was critical to identify what stakeholders need in order to combine those needs.',
    workExperience: '',
    projectImage: 'img/iot-dashboard.png',
  };
}

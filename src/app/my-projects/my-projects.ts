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
      'A dynamic jump-and-run game where players collect coins, defeat enemies by jumping on them, and throw salsa bottles to overcome obstacles. This fast-paced adventure combines classic platformer mechanics with creative gameplay elements.',
    workProcess:
      'I organized the development by creating epics for each core feature and breaking them down into manageable tickets. This included separate epics for character mechanics, enemy behavior, collectibles, and environmental interactions. This structured approach ensured systematic progress and clear milestones throughout development.',
    workExperience: '',
    projectImage: 'img/el-pollo-loco.png',
  };

  joinDetails: projectDetailsType = {
    aboutTheProject:
      'Join is a kanban board application designed to organize and track tasks efficiently. It streamlines project management by providing an intuitive visual interface that helps teams stay organized and maintain clear visibility of their workflow.',
    workProcess:
      'Before development began, I created a comprehensive plan: defining project requirements, establishing epics, breaking them down into actionable tickets, refining each ticket for clarity, and assigning team members to their respective epics. This methodical approach ensured clear expectations and efficient collaboration from the start.',
    workExperience:
      "Leveraging my professional experience from Enpal, I took the opportunity to lead the project and delegate tasks effectively to my colleagues. I maintained the project's structure throughout development, provided guidance when needed, and kept our kanban board consistently updated to ensure transparency and progress tracking for the entire team.",
    projectImage: 'img/join.png',
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

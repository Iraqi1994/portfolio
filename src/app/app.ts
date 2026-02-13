import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Atf } from './atf/atf';
import { WhyMeSection } from './why-me-section/why-me-section';
import { MySkills } from './my-skills/my-skills';
import { MyProjects } from './my-projects/my-projects';
import { TeamplayerSection } from './teamplayer-section/teamplayer-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Atf, WhyMeSection, MySkills, MyProjects, TeamplayerSection],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}

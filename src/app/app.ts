import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Atf } from './atf/atf';
import { WhyMeSection } from './why-me-section/why-me-section';
import { MySkills } from './my-skills/my-skills';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Atf, WhyMeSection, MySkills],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}

import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Atf } from './atf/atf';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Atf],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}

import { Component, signal, computed } from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-atf',
  imports: [Navbar],
  templateUrl: './atf.html',
  styleUrl: './atf.scss',
})
export class Atf {
  arrowHovered = signal(false);
  arrowImageSrc = computed(() =>
    this.arrowHovered() ? 'img/arrow-down-hover.png' : 'img/arrow-down.png',
  );

  setArrowHover(hovered: boolean) {
    this.arrowHovered.set(hovered);
  }
}

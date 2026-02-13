import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  host: {
    '(window:scroll)': 'onWindowScroll()',
  },
})
export class Navbar {
  isSticky = false;
  lastScrollPosition = 0;
  activeSection = '';

  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;

    if (currentScrollPosition > viewportHeight - 104) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
      this.activeSection = '';
    }

    if (this.isSticky) {
      let foundSection = false;
      const sections = ['whyMe', 'mySkills', 'myProjects'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            this.activeSection = sectionId;
            foundSection = true;
            break;
          }
        }
      }
      if (!foundSection) {
        this.activeSection = '';
      }
    }
    this.lastScrollPosition = currentScrollPosition;
  }
}

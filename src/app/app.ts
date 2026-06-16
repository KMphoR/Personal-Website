import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Certifications } from './components/certifications/certifications';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Header, About, Projects, Certifications, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showScrollTop = false;

  @HostListener('window:scroll')
  onScroll() {
    this.showScrollTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

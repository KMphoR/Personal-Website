import { Component, OnInit, OnDestroy, ChangeDetectorRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit, OnDestroy {
  menuOpen = false;
  displayedText = '';
  isTyping = true;

  bgImage = this.getBackground();

  private getBackground(): string {
    return window.innerWidth <= 600 ? 'images/smallBackground2.PNG' : 'images/Background2.jpg';
  }

  @HostListener('window:resize')
  onResize() { this.bgImage = this.getBackground(); this.cdr.detectChanges(); }

  private words = ['Software Engineer.', 'Software Developer.', 'Full Stack Developer.'];

  techs = [
    { label: 'HTML',       icon: 'fa-brands fa-html5',      color: '#e34f26' },
    { label: 'CSS',        icon: 'fa-brands fa-css3-alt',   color: '#1572b6' },
    { label: 'JavaScript', icon: 'fa-brands fa-js',         color: '#f7df1e' },
    { label: 'C#',         icon: 'fa-solid fa-code',        color: '#9b4fc8' },
    { label: 'PostgreSQL', icon: 'fa-solid fa-database',    color: '#336791' },
    { label: '.NET',       icon: 'fa-solid fa-layer-group', color: '#512bd4' },
    { label: 'TypeScript', icon: 'fa-brands fa-js',         color: '#3178c6' },
    { label: 'WebSockets', icon: 'fa-solid fa-plug',        color: '#00b894' },
    { label: 'Angular',    icon: 'fa-brands fa-angular',    color: '#dd0031' },
    { label: 'Docker',     icon: 'fa-brands fa-docker',     color: '#2496ed' },
    { label: 'Postman',    icon: 'fa-solid fa-paper-plane', color: '#ff6c37' },
  ];
  private wordIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private intervalId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  openMenu() { this.menuOpen = true; }
  closeMenu() { this.menuOpen = false; }

  ngOnInit() {
    this.intervalId = setInterval(() => this.tick(), 120);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private tick() {
    const current = this.words[this.wordIndex];

    if (!this.deleting) {
      this.charIndex++;
      this.displayedText = current.slice(0, this.charIndex);
      this.isTyping = true;

      if (this.charIndex === current.length) {
        this.isTyping = false;
        clearInterval(this.intervalId);
        setTimeout(() => {
          this.deleting = true;
          this.intervalId = setInterval(() => this.tick(), 80);
        }, 1800);
      }
    } else {
      this.charIndex--;
      this.displayedText = current.slice(0, this.charIndex);

      if (this.charIndex === 0) {
        this.deleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
        clearInterval(this.intervalId);
        this.intervalId = setInterval(() => this.tick(), 120);
      }
    }

    this.cdr.detectChanges();
  }
}

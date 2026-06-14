import { Component, OnInit, OnDestroy } from '@angular/core';
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

  private words = ['Software Engineer.', 'Software Developer.', 'Problem Solver.'];
  private wordIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer: any;

  openMenu() { this.menuOpen = true; }
  closeMenu() { this.menuOpen = false; }

  ngOnInit() { this.type(); }
  ngOnDestroy() { clearTimeout(this.timer); }

  private type() {
    const current = this.words[this.wordIndex];
    if (!this.deleting) {
      this.displayedText = current.slice(0, ++this.charIndex);
      this.isTyping = true;
      if (this.charIndex === current.length) {
        this.isTyping = false;
        this.timer = setTimeout(() => { this.deleting = true; this.type(); }, 1800);
        return;
      }
    } else {
      this.displayedText = current.slice(0, --this.charIndex);
      if (this.charIndex === 0) {
        this.deleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
      }
    }
    this.timer = setTimeout(() => this.type(), this.deleting ? 80 : 120);
  }
}

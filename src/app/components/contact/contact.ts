import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  year = new Date().getFullYear();
  sending = false;
  successMsg = '';

  formData = { name: '', email: '', message: '' };

  private scriptURL = 'https://script.google.com/macros/s/AKfycbwPo3ncR6W0Y3kJE6iPWEgA3wLdU1ytylcYOhKGgSLxtcJtm-c7XRdjOkaEp6JtqfXV5w/exec';

  isEmailValid(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email);
  }

  isFormValid(): boolean {
    return this.formData.name.trim().length >= 2 && this.isEmailValid();
  }

  onSubmit(e: Event) {
    e.preventDefault();
    const payload = new FormData();
    payload.append('Name', this.formData.name);
    payload.append('Email', this.formData.email);
    payload.append('Message', this.formData.message);
    fetch(this.scriptURL, { method: 'POST', body: payload, mode: 'no-cors' });
    this.successMsg = 'Message sent successfully!';
    this.formData.name = '';
    this.formData.email = '';
    this.formData.message = '';
    setTimeout(() => this.successMsg = '', 4000);
  }
}

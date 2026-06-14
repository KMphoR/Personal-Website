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

  onSubmit(e: Event) {
    e.preventDefault();
    this.sending = true;
    const form = e.target as HTMLFormElement;
    fetch(this.scriptURL, { method: 'POST', body: new FormData(form) })
      .then(() => {
        this.successMsg = 'Message sent successfully!';
        this.formData = { name: '', email: '', message: '' };
        setTimeout(() => this.successMsg = '', 4000);
      })
      .catch(err => console.error('Error:', err))
      .finally(() => this.sending = false);
  }
}

import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Certifications } from './components/certifications/certifications';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Header, About, Projects, Certifications, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}

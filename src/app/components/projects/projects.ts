import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'My personal portfolio built with Angular — featuring a typing animation, certifications section, project showcase, and a contact form connected to Google Sheets.',
      image: 'images/projectCover.PNG',
      link: 'https://github.com/KMphoR/personal-website-v2'
    },
    {
      title: 'Search & Sort Algorithms',
      description: 'C# program that uses an array parameter to perform search and sorting algorithms. Menu-driven — allows the user to select their preferred option.',
      image: 'images/search-sorting icon.jpg',
      link: 'https://github.com/KMphoR/Search-Sorting_Algorithms'
    },
    {
      title: 'Advanced LogIn/SignUp Page',
      description: 'Form validation that checks data format and constraints in real time — built with HTML, CSS & JavaScript.',
      image: 'images/Advanced LogIn-SignUp.jpg',
      link: 'https://github.com/KMphoR/Advanced-Form-Validation'
    }
  ];
}

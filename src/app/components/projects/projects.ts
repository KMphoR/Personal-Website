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
      title: 'Search & Sort Algorithms',
      description: 'C# program that uses an array parameter to perform search and sorting algorithms. Menu-driven — allows the user to select their preferred option.',
      image: 'images/search-sorting icon.jpg',
      link: 'https://github.com/KMphoR/Search-Sorting_Algorithms'
    },
    {
      title: 'Password Strength Checker',
      description: 'C# program that evaluates password strength based on length, uppercase/lowercase letters, numbers, special characters, and no spaces.',
      image: 'images/password checker icon.webp',
      link: 'https://github.com/KMphoR/Code_Off_Day_4-Entelect-Password-Strength-Checker'
    },
    {
      title: 'Advanced LogIn/SignUp Page',
      description: 'Form validation that checks data format and constraints in real time — built with HTML, CSS & JavaScript.',
      image: 'images/Advanced LogIn-SignUp.jpg',
      link: 'https://github.com/KMphoR/Advanced-Form-Validation'
    }
  ];
}

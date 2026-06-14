import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications {
  certifications: { name: string; issuer: string; date: string; icon: string; link: string }[] = [
    {
      name: 'Microservices on .NET 8 — ASP.NET Web API, Docker, RabbitMQ, MassTransit, gRPC, Yarp Gateway, Redis & SQL Server',
      issuer: 'Udemy',
      date: '2025',
      icon: 'fa-brands fa-udemy',
      link: 'https://www.udemy.com/certificate/UC-818656b6-7bfc-4119-b776-ecf3ac27924f/'
    }
  ];
}

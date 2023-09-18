import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "portfolio .";
  name: string = 'Mayank Tripathi';
  position: string = 'Software Engineer';
  description: string = 'A hardworking professional who is willing to learn and always looking for new ways to grow within the company. For the past 2+ years working as a front-end web developer using Angular. Experienced in creating UI components and services in angular.';
  links: any = {
    git: 'https://github.com/plug-in-pow',
    linkedin: 'https://www.linkedin.com/in/mayank-tripathi-2021/',
    leetcode: 'https://leetcode.com/tripathimayank36/',
    resume: 'https://drive.google.com/file/d/1gXcJ6fUf59r78jKR0jdF-_dK6qY5QGsn/view?usp=sharing'
  }
  projects: any[] = [
    {
      title: "Info Rail",
      description: "Users can search and find information on trains through the info rail website, including their timing, coaches, and route.",
      website: "https://info-rail.netlify.app/",
      git: "https://github.com/plug-in-pow/info-rail"
    },
    {
      title: "Work on",
      description: "Individuals can organize their daily tasks by keeping a To-Do list using the work-on webpage. We also offer a calendar view for weekly planning.",
      website: null,
      git: "https://github.com/plug-in-pow/work-on"
    }
  ]
}

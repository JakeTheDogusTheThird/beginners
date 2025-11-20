import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from "./course-card/course-card.component";
import { COURSES } from '../db-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = "App Title";
  coreCourse = COURSES[0];
  rxjsCourse = COURSES[1];
  ngrxCourse = COURSES[2];

  onLogoClicked() {
    alert('Hello World');
  }
}

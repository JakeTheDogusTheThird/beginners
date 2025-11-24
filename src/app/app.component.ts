import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent, DatePipe, TitleCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app Title with irregular Capitalization';
  courses: Course[] = COURSES;
  startDate: Date = new Date(2025, 0, 1);

  onCourseSelected(course: Course): void {
    console.log(`Course clicked ${course.description}`);
  }

  trackCourse(id: number, course: Course) {
    return course.id;
  } 
}

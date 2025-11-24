import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
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
export class AppComponent implements OnInit {
  title: string = 'app Title with irregular Capitalization';
  courses?: Course[];
  startDate: Date = new Date(2025, 0, 1);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const params: HttpParams = new HttpParams()
      .set("page", "1")
      .set("pageSize", "5");
    this.http.get<Course[]>('/api/courses', {params})
      .subscribe((courses) => this.courses = courses);
  }

  onCourseSelected(course: Course): void {
    console.log(`Course clicked ${course.description}`);
  }

  trackCourse(id: number, course: Course) {
    return course.id;
  }
}

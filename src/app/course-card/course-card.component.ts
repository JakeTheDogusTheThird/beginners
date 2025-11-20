import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input({ required: true }) course!: Course;
  @Input({ required: true }) id!: number;

  @Output('courseSelected') courseSelected: EventEmitter<Course> =
    new EventEmitter();

  public onCourseViewed(): void {
    console.log('Card Button Clicked');
    this.courseSelected.emit(this.course);
  }
}

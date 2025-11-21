import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../model/course';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input({ required: true }) course!: Course;
  @Input({ required: true }) id!: number;

  @Output('courseSelected') courseSelected: EventEmitter<Course> =
    new EventEmitter();

  onCourseViewed(): void {
    console.log('Card Button Clicked');
    this.courseSelected.emit(this.course);
  }

  isImageVisible(): boolean {
    return !!(this.course && this.course.iconUrl);
  }

  cardClasses() {
    return {
      'beginner': this.course.category === 'BEGINNER'
    };
  }

  cardStyles() {
    return {
      'text-decoration': 'underline'
    }
  }
}

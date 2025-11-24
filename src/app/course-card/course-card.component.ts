import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { NgClass, NgStyle } from '@angular/common';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent implements OnInit {
  @Input({ required: true }) course!: Course;
  @Input({ required: true }) id!: number;

  @Output('courseUpdated') courseEmitter: EventEmitter<Course> =
    new EventEmitter();

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    console.log("Courses Service injected into course card " + this.coursesService); 
  }

  onSaveClicked(description: string): void {
    this.courseEmitter.emit({...this.course, description});
  }

  isImageVisible(): boolean {
    return !!(this.course && this.course.iconUrl);
  }

  cardClasses() {
    return {
      beginner: this.course.category === 'BEGINNER',
    };
  }

  cardStyles() {
    return {
      'text-decoration': 'underline',
    };
  }
}

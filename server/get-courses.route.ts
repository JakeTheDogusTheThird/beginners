import { Request, Response } from 'express';
import { COURSES } from '../src/db-data';
import { Course } from '../src/app/model/course';

export function getAllCourses(req: Request, res: Response) {
  res.status(200).json(Object.values(COURSES));
}

export function getCourseById(req: Request, res: Response) {
  const courseId = Number(req.params['id']);

  const courses: any = Object.values(COURSES);

  const course = courses.find((course : Course) => course.id == courseId);

  res.status(200).json(course);
}

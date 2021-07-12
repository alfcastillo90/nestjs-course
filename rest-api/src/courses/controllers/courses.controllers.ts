import { Controller, Get } from '@nestjs/common';
import {CoursesRepository} from '../repositories/courses.repository';
import {Course} from '../../../../shared/course';

@Controller()
export class CoursesControllers {
  constructor(private coursesDB: CoursesRepository) {
  }

  @Get('/api/hello-world')
  async helloWorld(): Promise<string> {
    return 'Hello world!';
  }

  @Get('/api/courses/')
  async findAllCourses(): Promise<Course[]> {
    return this.coursesDB.findAll();
  }
}

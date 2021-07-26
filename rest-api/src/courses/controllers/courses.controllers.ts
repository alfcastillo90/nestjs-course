import {Body, Controller, Delete, Get, Param, Post, Put, Req, Res} from '@nestjs/common';
import {CoursesRepository} from '../repositories/courses.repository';
import {Course} from '../../../../shared/course';

@Controller('courses')
export class CoursesControllers {
  constructor(private coursesDB: CoursesRepository) {
  }

  @Get('hello-world')
  async helloWorld(): Promise<string> {
    return 'Hello world!';
  }

  @Get('courses/')
  async findAllCourses(@Req() request: Request, @Res() response: Response): Promise<Course[]> {
    return this.coursesDB.findAll();
  }

  @Put('courses/:courseId')
  async updateCourse(
    @Param('courseId') courseId: string,
    @Body() changes: Partial<Course>): Promise<Course> {
    return this.coursesDB.updateCourse(courseId, changes);
  }

  @Delete('course/:courseId')
  async deleteCourse(@Param('courseId') courseId: string) {
    return this.coursesDB.deleteCourse(courseId);
  }

  @Post('courses')
  async createCourse(@Body() course: Partial<Course>): Promise<Course> {
    return this.coursesDB.addCourse(course);
  }
}

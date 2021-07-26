import {Injectable} from '@nestjs/common';
import {Course} from '../../../../shared/course';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';

@Injectable()
export class CoursesRepository {
  constructor(@InjectModel('Course') private courseModel: Model<Course>) {
  }
  async findAll(): Promise<Course[]> {
    return this.courseModel.find();
  }

  async updateCourse(courseId: string, changes: Partial<Course>): Promise<Course> {
    return this.courseModel.findOneAndUpdate({ _id: courseId }, changes, { new: true  });
  }

  async deleteCourse(courseId) {
    return this.courseModel.deleteOne({ _id: courseId });
  }

  async addCourse(course: Partial<Course>): Promise<Course> {
    return this.courseModel.create(course);
  }
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesControllers } from './controllers/courses.controllers';
import { CoursesSchema } from './schemas/courses.schemas';
import {CoursesRepository} from './repositories/courses.repository';

@Module({
    imports: [MongooseModule.forFeature([
        {
            name: 'Course', schema: CoursesSchema,
        },
      ]),
    ],
    controllers: [
      CoursesControllers,
    ],
    providers: [
      CoursesRepository,
    ],
})
export  class CoursesModule {}

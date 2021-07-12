import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesControllers } from './controllers/courses.controllers';
import { CoursesSchema } from './schemas/courses.schemas';

@Module({
    imports: [MongooseModule.forFeature([
        {
            name: 'Course', schema: CoursesSchema,
        },
      ]),
    ],
    controllers: [ CoursesControllers ],
})
export  class CoursesModule {}

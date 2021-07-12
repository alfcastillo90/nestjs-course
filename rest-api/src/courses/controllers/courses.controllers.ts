import { Controller, Get } from '@nestjs/common';

@Controller()
export class CoursesControllers {
  @Get('/api/hello-world')
  async helloWorld(): Promise<string> {
    return 'Hello world!';
  }
}

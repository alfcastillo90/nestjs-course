import {ArgumentMetadata, BadRequestException, PipeTransform} from '@nestjs/common';

export class ToIntegerPipe implements  PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): number {
    // tslint:disable-next-line:radix
    const val = parseInt(value);
    if (isNaN(val)) {
      throw new BadRequestException('conversion to number failed' + value);
    }
    return val;
  }
}

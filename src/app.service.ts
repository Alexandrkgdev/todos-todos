import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  async getTodos() {
    return 'Hello World!';
  }
}

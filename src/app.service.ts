import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healthCheck(): { time: number; status: string } {
    return {
      status: 'ok',
      time: Date.now(),
    };
  }
}

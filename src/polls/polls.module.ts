import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PollsService } from './polls.service';
import { PollsController } from './polls.controller';
import { PollSchema } from './schemas/polls.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Poll', schema: PollSchema }])],
  controllers: [PollsController],
  providers: [PollsService],
})
export class PollsModule {}

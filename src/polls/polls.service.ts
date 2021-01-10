import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePollDto } from './dto/poll.dto';
import { Poll } from './interfaces/poll.interface';

@Injectable()
export class PollsService {
  constructor(@InjectModel('Poll') private readonly pollModel: Model<Poll>) {}

  async createPoll(createPollDto: CreatePollDto) {
    const newPoll = new this.pollModel({
      title: createPollDto.title,
      question: createPollDto.question,
      pollOptions: createPollDto.pollOptions,
      pollConfig: createPollDto.pollConfig,
    });
    return await newPoll.save();
  }

  async getPoll(id: string) {
    return await this.pollModel.findById(id).exec();
  }
}

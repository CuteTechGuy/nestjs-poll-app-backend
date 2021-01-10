import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PollsService } from './polls.service';
import { CreatePollDto } from './dto/poll.dto';

@Controller('polls')
export class PollsController {
  constructor(private readonly pollsService: PollsService) {}

  @Post()
  async createPoll(@Body() createPollDto: CreatePollDto) {
    return this.pollsService.createPoll(createPollDto);
  }

  @Get('/:id')
  async getPoll(@Param('id') id) {
    return this.pollsService.getPoll(id);
  }
}

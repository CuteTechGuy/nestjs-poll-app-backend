import { pollOption } from '../interfaces/poll.interface';

export interface GetPollDto {
  id: string;
}

export interface CreatePollDto {
  title: string;
  question: string;
  pollOptions: pollOption[];
  pollConfig: any;
}

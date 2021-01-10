import { Document } from 'mongoose';

export interface pollOption {
  optionId: string;
  option: string;
  voteCount: number;
}

export interface Poll extends Document {
  id: string;
  title: string;
  question: string;
  url: string;
  pollOptions: pollOption[];
  pollConfigs: any;
}

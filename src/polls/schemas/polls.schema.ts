import * as mongoose from 'mongoose';

export const PollSchema = new mongoose.Schema({
  title: String,
  question: String,
  url: String,
  pollOptions: [
    {
      optionId: mongoose.Schema.Types.ObjectId,
      option: String,
      voteCount: Number,
    },
  ],
  pollConfig: {},
});

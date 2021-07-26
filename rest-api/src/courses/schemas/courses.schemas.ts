import * as mongoose from 'mongoose';

export const CoursesSchema = new  mongoose.Schema({
  category: String,
  description: String,
  iconUrl: String,
  lessonsCount: Number,
  longDescription: String,
  seqNo: {
    required: true,
    type: Number,
  },
  promo: Boolean,
  url: String,
});

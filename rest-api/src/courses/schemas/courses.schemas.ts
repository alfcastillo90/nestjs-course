import * as mongoose from 'mongoose';

export const CoursesSchema = new  mongoose.Schema({
    description: String,
    longDescription: String,
    iconUrl: String,
    category: String,
    lessonsCount: Number,
    seqNo: Number,
    url: String,
    promo: Boolean,
});

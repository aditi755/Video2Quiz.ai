
import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  userIdentifier: {type: String, required:true},
  videoUrl: { type: String, required: true },
  quiz: [
    {
      question: { type: String, required: true },
      options: [{ type: String, required: true }],
      correct_answer: { type: String, required: true },
    }
  ]
}, { timestamps: true });

const Quiz = mongoose.models.Quiz || mongoose.model('Quiz', quizSchema);

export default Quiz;

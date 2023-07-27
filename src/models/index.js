// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Attempt, Quiz, QuizSet } = initSchema(schema);

export {
  User,
  Attempt,
  Quiz,
  QuizSet
};
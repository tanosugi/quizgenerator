import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly answeredQuestions?: number | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly answeredQuestions?: number | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerAttempt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attempt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quizsetID: string;
  readonly numberOfCorrectAnswer?: number | null;
  readonly user?: string | null;
  readonly time?: number | null;
  readonly numberOfQuiz?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAttempt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attempt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quizsetID: string;
  readonly numberOfCorrectAnswer?: number | null;
  readonly user?: string | null;
  readonly time?: number | null;
  readonly numberOfQuiz?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Attempt = LazyLoading extends LazyLoadingDisabled ? EagerAttempt : LazyAttempt

export declare const Attempt: (new (init: ModelInit<Attempt>) => Attempt) & {
  copyOf(source: Attempt, mutator: (draft: MutableModel<Attempt>) => MutableModel<Attempt> | void): Attempt;
}

type EagerQuiz = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Quiz, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly question?: string | null;
  readonly choiceText?: (string | null)[] | null;
  readonly isCorrect?: (boolean | null)[] | null;
  readonly explanation?: (string | null)[] | null;
  readonly quizsetID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuiz = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Quiz, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly question?: string | null;
  readonly choiceText?: (string | null)[] | null;
  readonly isCorrect?: (boolean | null)[] | null;
  readonly explanation?: (string | null)[] | null;
  readonly quizsetID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Quiz = LazyLoading extends LazyLoadingDisabled ? EagerQuiz : LazyQuiz

export declare const Quiz: (new (init: ModelInit<Quiz>) => Quiz) & {
  copyOf(source: Quiz, mutator: (draft: MutableModel<Quiz>) => MutableModel<Quiz> | void): Quiz;
}

type EagerQuizSet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<QuizSet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly subject?: string | null;
  readonly level?: string | null;
  readonly numberOfQuiz?: number | null;
  readonly Quizzes?: (Quiz | null)[] | null;
  readonly Attempts?: (Quiz | null)[] | null;
  readonly numberOfAttempt?: number | null;
  readonly lng?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuizSet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<QuizSet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly subject?: string | null;
  readonly level?: string | null;
  readonly numberOfQuiz?: number | null;
  readonly Quizzes: AsyncCollection<Quiz>;
  readonly Attempts: AsyncCollection<Quiz>;
  readonly numberOfAttempt?: number | null;
  readonly lng?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type QuizSet = LazyLoading extends LazyLoadingDisabled ? EagerQuizSet : LazyQuizSet

export declare const QuizSet: (new (init: ModelInit<QuizSet>) => QuizSet) & {
  copyOf(source: QuizSet, mutator: (draft: MutableModel<QuizSet>) => MutableModel<QuizSet> | void): QuizSet;
}
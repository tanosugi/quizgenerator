"use client";

import { useTranslationClient } from "@/i18n/client";
import { Attempt, Quiz, QuizSet, User } from "@/models";
import { QuizItemSolveView } from "@/ui-components";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function QuizSolve({
  params: { lng, quizId },
}: {
  params: {
    lng: string;
    quizId: string;
  };
}) {
  const { user } = useAuthenticator();
  const router = useRouter();
  const { t } = useTranslationClient(lng);
  const [time, setTime] = useState(0);
  const [userInDataStore, setUserInDataStore] = useState<User>();
  const [quizzes, setQuizs] = useState<Quiz[]>([]);
  const [quizSet, setQuizSet] = useState<QuizSet>();
  const [quizLength, setQuizLength] = useState(0);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [correctAnswered, setCorrectAnswered] = useState(0);
  const [answerChosen, setAnswerChosen] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean>();
  const [explanation, setExplanation] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const fetchQuiz = async () => {
    const resp = await DataStore.query(Quiz, (c) => c.quizsetID.eq(quizId));
    console.log("resp:", resp);
    setQuizs(resp);
    setQuizLength(resp.length);
  };
  const fetchQuizSet = async () => {
    const resp = await DataStore.query(QuizSet, (c) => c.id.eq(quizId));
    console.log("resp:", resp);
    setQuizSet(resp[0]);
  };
  const fetchUser = async () => {
    const resp = await DataStore.query(User, (c) => c.email.eq(user?.attributes?.email));
    console.log("resp:", resp);
    setUserInDataStore(resp[0]);
  };
  useEffect(() => {
    fetchQuiz();
    fetchQuizSet();
    fetchUser();
    const id = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const currentQuiz: Quiz = quizzes[currentQuizIndex];
  console.log("answerChosen:", answerChosen);
  const answer = (answerChosenIndex: number) => {
    if (!isAnswered) {
      if (currentQuiz?.isCorrect && currentQuiz?.isCorrect[answerChosenIndex]) {
        setIsCorrect(true);
        setCorrectAnswered(correctAnswered + 1);
      } else {
        setIsCorrect(false);
      }
      setExplanation(
        (currentQuiz?.explanation && currentQuiz?.explanation[answerChosenIndex]) || ""
      );
      setIsAnswered(true);
    }
  };
  const onClickNextButton = () => {
    if (currentQuizIndex + 1 == quizLength) {
      finishQuiz();
    } else {
      setForNextQuiz();
    }
  };
  const setForNextQuiz = () => {
    setCurrentQuizIndex(currentQuizIndex + 1);
    setAnswerChosen("");
    setExplanation("");
    setIsAnswered(false);
  };
  const finishQuiz = async () => {
    const attempt = await new Attempt({
      quizsetID: quizSet?.id || "",
      numberOfCorrectAnswer: correctAnswered,
      numberOfQuiz: quizSet?.numberOfQuiz,
      user: user?.attributes?.email.split("@")[0] || "",
      time: time,
    });
    console.log("attempt:", attempt);
    await DataStore.save(attempt);
    await DataStore.save(
      quizSet
        ? QuizSet.copyOf(quizSet, (updated) => {
            updated.numberOfAttempt = (quizSet?.numberOfAttempt || 0) + 1;
          })
        : new QuizSet({})
    );
    if (userInDataStore) {
      DataStore.save(
        User.copyOf(userInDataStore, (updated) => {
          updated.answeredQuestions = (userInDataStore?.answeredQuestions || 0) + 1;
        })
      );
    } else {
      DataStore.save(
        new User({
          email: user?.attributes?.email,
          name: user?.attributes?.email.split("@")[0] || "",
          answeredQuestions: 1,
        })
      );
    }
    router.push(`/${lng}/quiz-result/${attempt.id}`);
  };
  return (
    <>
      {quizzes && quizLength > 0 && (
        <QuizItemSolveView
          overrides={{
            time: { children: `${t("sec")} : ${time}` },
            problems: { children: `${currentQuizIndex + 1} / ${quizLength}` },
            problem: { children: quizzes[currentQuizIndex]?.question },
            "Choice-a": {
              overrides: {
                "choice-text": {
                  children: (currentQuiz?.choiceText && currentQuiz?.choiceText[0]) || "",
                },
              },
              status: answerChosen == "Choice-a" ? (isCorrect ? "correct" : "incorrect") : "a",
              onClick: () => {
                answer(0);
                setAnswerChosen("Choice-a");
              },
            },
            "Choice-b": {
              overrides: {
                "choice-text": {
                  children: (currentQuiz?.choiceText && currentQuiz?.choiceText[1]) || "",
                },
              },
              status: answerChosen == "Choice-b" ? (isCorrect ? "correct" : "incorrect") : "b",
              onClick: () => {
                answer(1);
                setAnswerChosen("Choice-b");
              },
            },
            "Choice-c": {
              overrides: {
                "choice-text": {
                  children: (currentQuiz?.choiceText && currentQuiz?.choiceText[2]) || "",
                },
              },
              status: answerChosen == "Choice-c" ? (isCorrect ? "correct" : "incorrect") : "c",
              onClick: () => {
                answer(2);
                setAnswerChosen("Choice-c");
              },
            },
            explanation: { children: explanation },
            Button: Object.assign(
              { onClick: () => onClickNextButton() },
              currentQuizIndex + 1 == quizLength
                ? { children: t("Finish"), variation: "error" }
                : { children: t("Next") }
            ),
          }}
        />
      )}
    </>
  );
}

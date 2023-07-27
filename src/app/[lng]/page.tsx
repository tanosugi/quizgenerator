"use client";
import { useTranslationClient } from "@/i18n/client";
import Center from "@/layout/center";
import LangModalMenue from "@/layout/lang-modal-menue";
import { FeaturesView, HeroSmallView } from "@/ui-components";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  const router = useRouter();
  const { t } = useTranslationClient(lng);
  const [langModalToOpen, setLangModalToOpen] = useState(false);
  return (
    <>
      <Center>
        <HeroSmallView
          overrides={{
            "Simple Quiz Platform where AI Creates Quizzes": {
              children: t("Simple Quiz Platform where AI Creates Quizzes"),
            },
            "Set the subject and level and the AI will create the quiz for you. When you answer, the correct or incorrect answer and an explanation will be displayed. You can also see the ranking of the percentage of correct answers and the number of quizzes answered by each user.":
              {
                children: t(
                  "Set the subject and level and the AI will create the quiz for you. When you answer, the correct or incorrect answer and an explanation will be displayed. You can also see the ranking of the percentage of correct answers and the number of quizzes answered by each user."
                ),
              },
            Button: {
              onClick: () => router.push(`/${lng}/quiz-generate`),
              children: t("Sign Up for Free"),
            },
          }}
        />
        <FeaturesView
          overrides={{
            Features: { children: t("Features") },
            "Quiz Generation": { children: t("Quiz Generation") },
            "Set the subject and level and the AI will create the quiz for you.": {
              children: t("Set the subject and level and the AI will create the quiz for you."),
            },
            Button3976966: {
              children: t("Try it Out"),
              onClick: () => router.push(`/${lng}/quiz-generate`),
            },
            "Quiz Answering Function": { children: t("Quiz Answering Function") },
            "You can answer the quiz. When you answer, correct or incorrect answers and explanations will be displayed.":
              {
                children: t(
                  "You can answer the quiz. When you answer, correct or incorrect answers and explanations will be displayed."
                ),
              },
            Button3976990: {
              children: t("Try it Out"),
              onClick: () => router.push(`/${lng}/quiz-list`),
            },
            "Ranking Function": { children: t("Ranking Function") },
            "You can also see the ranking of the percentage of correct answers and the number of quizzes answered by each user.":
              {
                children: t(
                  "You can also see the ranking of the percentage of correct answers and the number of quizzes answered by each user."
                ),
              },
            Button3976997: {
              children: t("Try it Out"),
              onClick: () => router.push(`/${lng}/user-ranking`),
            },
            "Multi-Language Support": { children: t("Multi-Language Support") },
            "English, Japanese, Chinese, and Spanish, Portuguese are supported. Not only will the menu be displayed in the selected language, but the quiz, answers, and explanations will also be displayed in that language!":
              {
                children: t(
                  "English, Japanese, Chinese, and Spanish, Portuguese are supported. Not only will the menu be displayed in the selected language, but the quiz, answers, and explanations will also be displayed in that language!"
                ),
              },
            Button4007950: {
              children: t("Try it Out"),
              onClick: () => setLangModalToOpen(true),
            },
          }}
        />
        <LangModalMenue isOpen={langModalToOpen} setModalToOpen={setLangModalToOpen} lng={lng} />
      </Center>
    </>
  );
}

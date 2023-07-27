"use client";
import { useTranslationClient } from "@/i18n/client";
import Center from "@/layout/center";
import { QuizSet } from "@/models";
import { QuizListHeaderView, QuizSetViewCollection } from "@/ui-components";
import { DataStore } from "aws-amplify";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Page({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  const router = useRouter();
  const { t } = useTranslationClient(lng);
  const [quizSets, setQuizSets] = useState<QuizSet[]>();
  const fetchQuizSet = async () => {
    const resp = await DataStore.query(QuizSet, (c) => c.lng.eq(lng));
    setQuizSets(resp);
  };
  useEffect(() => {
    fetchQuizSet();
  }, []);
  const onClickQuizSetView = (id: string) => {
    router.push(`/${lng}/quiz-solve/${id}`);
  };
  return (
    <Center>
      <QuizListHeaderView
        overrides={{
          "Quiz List & Ranking": { children: t("Quiz List & Ranking") },
          "subject and level": { children: t("subject and level") },
          "ansewered by": { children: t("ansewered by") },
        }}
      />
      <QuizSetViewCollection
        items={quizSets}
        overrideItems={({ item, index }) => ({
          onClick: () => {
            onClickQuizSetView(item.id);
          },
        })}
      />
    </Center>
  );
}

"use client";

import { useTranslationClient } from "@/i18n/client";
import Center from "@/layout/center";
import { Quiz, QuizSet } from "@/models";
import generateQuizzes from "@/prompts/generate-quizzes";
import { modalStyle } from "@/styles/modalStyle";
import { CreateQuizSetWithoutSaveForm, GenerateQuizHeaderView } from "@/ui-components";
import { CreateQuizSetWithoutSaveFormInputValues } from "@/ui-components/CreateQuizSetWithoutSaveForm";
import chat from "@/utils/chat";
import CountDownToGenerateQuiz from "@/utils/count-down-to-generate-quiz";
import { DataStore } from "aws-amplify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "react-modal";

export default function Page({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  const router = useRouter();
  const { t } = useTranslationClient(lng);
  const [isWaitingModalOpen, setIsWaitingModalOpen] = useState(false);
  const onSubmitForm = async (fields: CreateQuizSetWithoutSaveFormInputValues) => {
    setIsWaitingModalOpen(true);
    console.log("fields:", fields, {
      subject: fields["Field0"],
      level: fields["Field1"],
      numberOfQuiz: Number(fields["Field2"]),
    });
    const quizSet = await new QuizSet({
      subject: fields["Field0"],
      level: fields["Field1"],
      numberOfQuiz: Number(fields["Field2"]),
      lng: lng,
    });
    console.log("quizSet.id:", quizSet.id);
    console.log("quizSet:", quizSet);
    await DataStore.save(quizSet);
    const { system_content, user_content, function_for_chatgptapi } = generateQuizzes({
      subject: quizSet?.subject,
      level: quizSet?.level,
      numberOfQuiz: quizSet?.numberOfQuiz,
      lng: lng,
    });
    const resp = await chat({
      system_content: system_content,
      user_content: user_content,
      function_for_chatgptapi: function_for_chatgptapi,
    });
    console.log("{ system_content, user_content, function_for_chatgptapi }:", {
      system_content,
      user_content,
      function_for_chatgptapi,
    });
    console.log("resp:", resp);
    console.log("JSON.parse(resp)", JSON.parse(resp));
    console.log("JSON.parse(resp).quiz:", JSON.parse(resp)?.quizzes);
    await JSON.parse(resp)?.quizzes?.forEach(async (item: any) => {
      console.log("item:", item);
      const quizCreated = await new Quiz({
        quizsetID: quizSet.id,
        question: item?.question,
        choiceText: [
          item?.choices[0]?.choiceText,
          item?.choices[1]?.choiceText,
          item?.choices[2]?.choiceText,
        ],
        isCorrect: [
          item?.choices[0]?.isCorrect,
          item?.choices[1]?.isCorrect,
          item?.choices[2]?.isCorrect,
        ],
        explanation: [
          item?.choices[0]?.explanation,
          item?.choices[1]?.explanation,
          item?.choices[2]?.explanation,
        ],
      });
      console.log("quizCreated:", quizCreated);
      await DataStore.save(quizCreated);
    });
    await router.push(`/${lng}/quiz-solve/${quizSet.id}`);
  };
  return (
    <Center>
      <GenerateQuizHeaderView overrides={{ "Generate Quiz": { children: t("Generate Quiz") } }} />
      <CreateQuizSetWithoutSaveForm
        onSubmit={(fields) => onSubmitForm(fields)}
        overrides={{
          "subject and level39841009": { children: t("rank") },
          Field0: { label: t("Subject"), placeholder: t("Math") },
          Field1: { label: t("Level"), placeholder: t("third grade in elementary school") },
          Field2: {
            label: t("Number of Quiz"),
            descriptiveText: t("The value must be less than 6"),
          },
          ClearButton: { children: t("Clear") },
          SubmitButton: { childern: t("Submit") },
          // "": { label: t("") },
        }}
      />
      <Modal isOpen={isWaitingModalOpen} style={modalStyle}>
        <CountDownToGenerateQuiz timeout={60} lng={lng} />
      </Modal>
    </Center>
  );
}

"use client";

import { Auth, DataStore } from "aws-amplify";
import { useRouter } from "next/navigation";
import { FC } from "react";
import Modal from "react-modal";

import { useTranslationClient } from "@/i18n/client";
import Center from "@/layout/center";
import { modalStyle } from "@/styles/modalStyle";
import { MenuView } from "@/ui-components";

const ModalMenue: FC<{
  isOpen: boolean;
  setModalToOpen: React.Dispatch<React.SetStateAction<boolean>>;
  lng: string;
}> = ({ isOpen, setModalToOpen, lng }) => {
  const { t } = useTranslationClient(lng);
  const router = useRouter();
  return (
    <div>
      <Modal isOpen={isOpen} style={modalStyle}>
        <Center>
          <MenuView
            overrides={{
              "close-circle": {
                onClick: () => setModalToOpen(false),
                className: "custom-btn",
              },
              "home-button": {
                onClick: () => {
                  router.push(`/${lng}/`);
                  setModalToOpen(false);
                },
                className: "custom-btn",
              },
              "quiz-generate": {
                onClick: () => {
                  router.push(`/${lng}/quiz-generate`);
                  setModalToOpen(false);
                },
                className: "custom-btn",
              },
              "quiz-list": {
                onClick: () => {
                  router.push(`/${lng}/quiz-list`);
                  setModalToOpen(false);
                },
                className: "custom-btn",
              },
              "user-ranking": {
                onClick: () => {
                  router.push(`/${lng}/user-ranking`);
                  setModalToOpen(false);
                },
                className: "custom-btn",
              },
              signout: {
                onClick: async () => {
                  await DataStore.clear();
                  await Auth.signOut();
                  await setModalToOpen(false);
                  router.push(`/${lng}/`);
                },
                className: "custom-btn",
              },
              Home: { children: t("Home") },
              "Generate Quiz": { children: t("Generate Quiz") },
              "Quiz List": { children: t("Quiz List") },
              "User Ranking": { children: t("User Ranking") },
              "Sign Out": { children: t("Sign Out") },
            }}
          />
        </Center>
      </Modal>
    </div>
  );
};

export default ModalMenue;

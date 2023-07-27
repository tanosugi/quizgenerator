"use client";

import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import Modal from "react-modal";

import Center from "@/layout/center";
import { modalStyle } from "@/styles/modalStyle";
import { LangMenuView } from "@/ui-components";

const LangModalMenue: FC<{
  isOpen: boolean;
  setModalToOpen: React.Dispatch<React.SetStateAction<boolean>>;
  lng: string;
}> = ({ isOpen, setModalToOpen, lng }) => {
  const router = useRouter();
  const currentPath = usePathname();
  const secondSlashIndex = currentPath.indexOf("/", 1); // 最初の「/」以降で二つ目の「/」の位置を取得
  let secondPart: string;
  if (secondSlashIndex == -1) {
    secondPart = "";
  } else {
    secondPart = currentPath.substring(secondSlashIndex + 1);
  }
  // console.log("currentPath:", currentPath);
  // console.log("secondSlashIndex", secondSlashIndex);
  // console.log("secondPart", secondPart);
  return (
    <div>
      <Modal isOpen={isOpen} style={modalStyle}>
        <Center>
          <LangMenuView
            overrides={{
              "close-circle": {
                onClick: () => setModalToOpen(false),
                className: "custom-btn",
              },
              English: {
                onClick: () => {
                  router.push(`/en/${secondPart}`);
                  setModalToOpen(false);
                },
                className: "custom-btn",
              },
              Japanese: {
                onClick: () => {
                  router.push(`/ja/${secondPart}`);
                  console.log("`/ja/${secondPart}`:", `/ja/${secondPart}`);
                  setModalToOpen(false);
                },
                className: "custom-btn",
              },
              Chinese: {
                onClick: () => {
                  router.push(`/zh/${secondPart}`);
                  console.log("`/zh/${secondPart}`:", `/zh/${secondPart}`);
                  setModalToOpen(false);
                },
                className: "custom-btn",
              },
              Spanish: {
                onClick: () => {
                  router.push(`/es/${secondPart}`);
                  console.log("`/es/${secondPart}`:", `/es/${secondPart}`);
                  setModalToOpen(false);
                },
                className: "custom-btn",
              },
              Portuguese: {
                onClick: () => {
                  router.push(`/pt/${secondPart}`);
                  console.log("`/pt/${secondPart}`:", `/pt/${secondPart}`);
                  setModalToOpen(false);
                },
                className: "custom-btn",
              },
            }}
          />
        </Center>
      </Modal>
    </div>
  );
};

export default LangModalMenue;

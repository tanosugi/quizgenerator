"use client";
import { Hub } from "aws-amplify";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import ModalMenue from "@/layout/modal-menue";
import { NavbarView } from "@/ui-components";
import { useAuthenticator } from "@aws-amplify/ui-react";
import LogRocket from "logrocket";
import LangModalMenue from "./lang-modal-menue";

export default function Header({ lng }: { lng: string }) {
  const { user } = useAuthenticator();
  const router = useRouter();
  const [modalToOpen, setModalToOpen] = useState(false);
  const [langModalToOpen, setLangModalToOpen] = useState(false);
  // console.log("modalToOpen:", modalToOpen);
  useEffect(() => {
    Hub.listen("ui", ({ payload }) => {
      if (
        payload.event === "actions:datastore:create:finished" ||
        payload.event === "actions:datastore:update:finished"
      ) {
      }
    });
  }, []);
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      LogRocket.identify(user?.attributes?.email || "", {});
    }
  }, [user?.attributes?.email]);
  return (
    <div>
      <NavbarView
        width="100%"
        margin="0px"
        overrides={{
          menu: { onClick: () => setModalToOpen(true), className: "custom-btn" },
          translate: { onClick: () => setLangModalToOpen(true), className: "custom-btn" },
          LogoAndTitle: { onClick: () => router.push("/"), className: "page-title" },
        }}
      />
      <ModalMenue isOpen={modalToOpen} setModalToOpen={setModalToOpen} lng={lng} />
      <LangModalMenue isOpen={langModalToOpen} setModalToOpen={setLangModalToOpen} lng={lng} />
    </div>
  );
}

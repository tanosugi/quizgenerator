"use client";
import { useTranslationClient } from "@/i18n/client";
import Center from "@/layout/center";
import { UserRankingHeaderView, UserViewCollection } from "@/ui-components";

export default function Page({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  const { t } = useTranslationClient(lng);
  return (
    <Center>
      <UserRankingHeaderView
        overrides={{
          "User Ranking": { children: t("User Ranking") },
          "user name": { children: t("user name") },
          "answered questions": { children: t("answered questions") },
        }}
      />
      <UserViewCollection />
    </Center>
  );
}

//{ children: t() },

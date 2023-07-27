"use client";
import { ReactNode } from "react";
import { Authenticator } from "@aws-amplify/ui-react";

export default function AuthenticatedLayout({
  children,
  params: { lng },
}: {
  children: ReactNode;
  params: {
    lng: string;
  };
}) {
  return <Authenticator>{children}</Authenticator>;
}

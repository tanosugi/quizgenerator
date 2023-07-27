"use client";
import "@/styles/globals.css";
import { studioTheme } from "@/ui-components";
import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import * as Sentry from "@sentry/react";
import { Amplify } from "aws-amplify";
import LogRocket from "logrocket";
import { useEffect } from "react";
import config from "../aws-exports";

Amplify.configure(config);

const Providers = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      // integrations: [new BrowserTracing()],
      // We recommend adjusting this value in production, or using tracesSampler
      // for finer control
      tracesSampleRate: 1.0,
    });
    if (process.env.NODE_ENV === "production") {
      LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET_ID || "");
    }
  }, []);

  return (
    <Sentry.ErrorBoundary>
      <AmplifyProvider theme={studioTheme}>
        <Authenticator.Provider>{children}</Authenticator.Provider>
      </AmplifyProvider>
    </Sentry.ErrorBoundary>
  );
};

export default Providers;

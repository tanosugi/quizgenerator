import Header from "@/layout/header";
import GoogleAnalytics from "@/utils/gtag";
import Providers from "@/utils/providers";
import { dir } from "i18next";
import { ReactNode } from "react";
import { languages } from "../../i18n/settings";

const siteName = "Quiz Generator";
const description =
  "Set the subject and level and the AI will create the quiz for you. When you answer, the correct or incorrect answer and an explanation will be displayed. You can also see the ranking of the percentage of correct answers and the number of quizzes answered by each user.";
const url = "http://quiz-generator.tanosugi.net";

export const metadata = {
  title: {
    default: siteName,
    /** `next-seo`の`titleTemplate`に相当する機能 */
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    // site: '@サイト用アカウントのTwitterID',
    // creator: '@作者のTwitterID',
  },
  verification: {
    //  google: 'サーチコンソールのやつ',
  },
  alternates: {
    canonical: url,
  },
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <Providers>
          <GoogleAnalytics />
          <Header lng={lng} />
          {children}
        </Providers>
      </body>
    </html>
  );
}

import { useTranslationClient } from "@/i18n/client";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function CountDownToGenerateQuiz({
  lng,
  timeout,
}: {
  lng: string;
  timeout: number;
}) {
  // ({ timeout }: { timeout: number }) {
  const { t } = useTranslationClient(lng);
  return (
    <CountdownCircleTimer
      isPlaying
      duration={timeout}
      colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
      colorsTime={[60, 40, 20, 0]}
    >
      {({ remainingTime }) => {
        return (
          <center>
            {t("Generating Quiz")}
            <br />
            {remainingTime}
          </center>
        );
      }}
    </CountdownCircleTimer>
  );
}

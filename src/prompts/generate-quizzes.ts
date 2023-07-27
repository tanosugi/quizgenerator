const generateQuizzes = ({
  subject,
  level,
  numberOfQuiz,
  lng,
}: {
  subject: string | null | undefined;
  level: string | null | undefined;
  numberOfQuiz: number | null | undefined;
  lng: string;
}) => {
  const system_content = `
You are a good quiz questioner and will be randomly quizzed on a given level and subject.
You try not to give you the same quiz as the previous one.
`;
  const user_content = `
please provide quizzes with the following constraint.

# constraint must you have to follow.
subject: ${subject}
level: ${level}
number of quiz: ${numberOfQuiz}
number of choices for one quiz: 3
language for questions, answer, and explanations: ${lng}
`;
  const function_for_chatgptapi = {
    name: "i_am_json",
    description:
      "return quizzes based on subject and level, options, ansers, and explanations in json format",
    parameters: {
      type: "object",
      properties: {
        quizzes: {
          type: "array",
          items: {
            type: "object",
            properties: {
              question: { type: "string", description: "question based on subject and level" },
              choices: {
                type: "array",
                description: "choices for user to choose. only one choice is correct.",
                items: {
                  type: "object",
                  properties: {
                    choiceText: { type: "string", description: "option for user to choose" },
                    isCorrect: {
                      type: "boolean",
                      description:
                        "true if the option is correct, false if not. only one choice is correct",
                    },
                    explanation: {
                      type: "string",
                      description:
                        "explanation for the option. only one choice is correct. explanation is in three sentences with details",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };
  return {
    system_content,
    user_content,
    function_for_chatgptapi,
  };
};
export default generateQuizzes;

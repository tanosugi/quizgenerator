import axios from "axios";

const API_URL = "https://api.openai.com/v1/";
// const MODEL = "gpt-3.5-turbo-0613";
const MODEL = "gpt-4-0613";
const API_KEY = process.env.NEXT_PUBLIC_KEY;

const chat = async ({
  system_content,
  user_content,
  function_for_chatgptapi,
}: {
  system_content: string;
  user_content: string;
  function_for_chatgptapi: Object;
}) => {
  try {
    const response = await axios.post(
      `${API_URL}chat/completions`,
      {
        model: MODEL,
        max_tokens: 8192,
        messages: [
          // { role: "system", content: system_content },
          { role: "user", content: user_content },
        ],
        functions: [function_for_chatgptapi],
        function_call: "auto",
      },
      {
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${API_KEY}` },
      }
    );
    return response?.data?.choices[0]?.message?.function_call?.arguments;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default chat;

import express from "express";
import Config from "../config.js";
import { LangChainPlusClient } from "langchain/client";
import { OpenAI } from "langchain";
import {
  Configuration,
  OpenAIApi,
  ChatCompletionRequestMessageRoleEnum as OpenAIRoles,
} from "openai";
import { PREPROMPT } from "../prompts/openai.js";

const router = express.Router();

const openai = new OpenAIApi(
  new Configuration({ apiKey: Config.openaiApiKey })
);

router.get("/", (req, res) => {
  res.send("Hello from Apillm!");
});

router.get("/gpt-4/:message", async (req, res) => {
  try {
    const message = req.params.message;
    const userMessage = { role: OpenAIRoles.User, content: message };
    const response = await openai.createChatCompletion({
      messages: [PREPROMPT, userMessage],
      model: "gpt-4",
      max_tokens: 150,
    });
    return res.status(200).send(response.data);
  } catch (error: any) {
    console.error(error);
    return res
      .status(500)
      .send(
        "Sorry about that! Apillm's having a bad day. He's having troubles with " +
          error.message
      );
  }
});

router.get("/langchain/:message", async (req, res) => {
  try {
    // TODO: add database implementation
    return res.status(200);
  } catch (error: any) {
    console.error(error);
    return res
      .status(500)
      .send(
        "Sorry about that! Apillm's having a bad day. He's having troubles with " +
          error.message
      );
  }
});

export default router;

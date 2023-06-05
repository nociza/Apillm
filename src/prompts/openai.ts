import { ChatCompletionRequestMessageRoleEnum as OpenAIRoles } from "openai";

export const PREPROMPT = {
  role: OpenAIRoles.System,
  content: `You are a ...`,
};

// add more prompts here

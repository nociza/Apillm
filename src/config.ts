// server/config.ts
import "dotenv/config";
interface Config {
  /** The port that the express server should bind to. */
  port: number;
  mongoDbUri: string;
  bingChatCookie?: string;
  bingImageCookie?: string;
  tempDir?: string;
  langchainApiKey?: string;
  langchainApiUrl?: string;
  openaiApiKey?: string;
}

const config: Config = {
  port: process.env.PORT ? parseInt(process.env.PORT) : 6000,
  mongoDbUri: process.env.MONGODB_URI || "",
  langchainApiKey: process.env.LANGCHAIN_API_KEY || "",
  langchainApiUrl: process.env.LANGCHAIN_API_URL || "",
  openaiApiKey: process.env.OPENAI_API_KEY || "",
};

// TODO: add option to require config options

export default config;

import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

const openai = createOpenAI({
  baseURL: 'https://ai-gateway.vercel.sh/v1',
  apiKey: process.env.VERCEL_AI_KEY || '',
});

async function main() {
  try {
    const { text } = await generateText({
      model: openai('openai/gpt-5.5'),
      prompt: 'Invent a new holiday.',
    });
    console.log(text);
  } catch (error) {
    console.error("Error during API call:", error);
  }
}

main();

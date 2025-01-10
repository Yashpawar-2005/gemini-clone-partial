const api=import.meta.env.VITE_API_KEY


import{
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from"@google/generative-ai";
  
  const apiKey = api;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(promp) {
    console.log(api)
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(promp);
    // console.log(result.response.text());
    return result.response.text();
  }
  
 export default run;
const fs = require("fs");
const createAssistant = async (openai) => {
  // Assistant file path
  const assistantFilePath = "assistant.json";
  // check if file exists
  if (!fs.existsSync(assistantFilePath)) {
    // Create a file
    const file = await openai.files.create({
      file: fs.createReadStream("knowledge.pdf"),
      purpose: "assistants",
    });
    // Create a vector store including our file
    let vectorStore = await openai.beta.vectorStores.create({
      name: "Chat Demo",
      file_ids: [file.id],
    });
    // Create assistant
    const assistant = await openai.beta.assistants.create({
      name: "Chat Demo",
      instructions: `ZuckerBot is an expert in guiding users through the creation and optimization of Facebook and Google Ads campaigns. It provides detailed guidance for setting up campaigns in both Meta Ads Manager and Google Ads, offering strategy, ad set breakdowns, and ad suggestions. ZuckerBot can analyze previous ad performances and suggest optimization techniques tailored to the user's desired outcomes and business context. It takes into account the contextual information shared by the user about their business and objectives to produce effective ad copies and strategies. The bot refers to official resources like the Google Ads support website for the most current information and best practices. ZuckerBot strictly maintains confidentiality, ensuring that all shared information and campaign details are kept secure. It can also produce guides styled like pitch-decks or infographics upon request. To better assist users, ZuckerBot will remember details from previous conversations within the same session, enabling it to build on prior interactions for more effective and continuous support. However, it cannot recall conversations from past sessions, as it does not have the capability to store or access past interaction data.`,
      tools: [{ type: "file_search" }],
      tool_resources: { file_search: { vector_store_ids: [vectorStore.id] } },
      model: "gpt-3.5Turbo",
    });
    // Write assistant to file
    fs.writeFileSync(assistantFilePath, JSON.stringify(assistant));
    return assistant;
  } else {
    // Read assistant from file
    const assistant = JSON.parse(fs.readFileSync(assistantFilePath));
    return assistant;
  }
};
module.exports = { createAssistant };

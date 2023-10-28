// This code is for v4 of the openai package: npmjs.com/package/openai
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [{
      "role": "system",
      "content": "You are a dungeon master creating a new campaign"
    },
    {
      "role": "user",
      "content": `Generate a tavern with the following properties and return the results as a JSON object.

      Tavern: Generate a fantasy tavern with the list of parameters below
      Name - Name of said tavern
      Size - Number of people in the tavern
      Quality - Quality of said tavern
      Bartender - Name of this tavern's bartender
      `
    }
  ],
  temperature: 1,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

//console.log(JSON.stringify(response));

//console.log("Response object as a string: " + response.choices[0].message.content);

const tavernInfo = JSON.parse(response.choices[0].message.content);

console.log("Tavern name: " + tavernInfo.Name);
console.log("Bartender Name: " + tavernInfo.Bartender);
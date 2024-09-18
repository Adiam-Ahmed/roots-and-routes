import OpenAI from "openai";
const openai = new OpenAI();

const completion = await openai.chat.completions.create({
    model: "gpt-4", 
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
            role: "user",
            content: "how are you ?",
        },
    ],
});

console.log(completion.choices[0].message.content);

// generateCommunity.js
import { serve } from "std/server";
import OpenAI from "openai";

const openai = new OpenAI();

serve(async (req) => {
    if (req.method === "POST") {
        try {
            const body = await req.json(); 
            const userPrompt = body.prompt || "Help me find a community."; 

            const response = await openai.chat.completions.create({
                model: "gpt-4", 
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    {
                        role: "user",
                        content: userPrompt, 
                    },
                ],
            });

            return new Response(JSON.stringify({ message: response.choices[0].message.content }), {
                headers: { "Content-Type": "application/json" },
            });
        } catch (error) {
            return new Response(JSON.stringify({ error: 'An error occurred' }), { status: 500 });
        }
    }
    return new Response('Method Not Allowed', { status: 405 });
});

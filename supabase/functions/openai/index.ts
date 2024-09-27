import OpenAI from "https://deno.land/x/openai@v4.24.0/mod.ts";

Deno.serve(async (req) => {
  // Add CORS headers to the response
  const headers = new Headers({
    "Content-Type": "text/plain",
    "Access-Control-Allow-Origin": "*", // Allow all origins (use specific origin in production)
    "Access-Control-Allow-Methods": "POST, OPTIONS", // Allowed HTTP methods
    "Access-Control-Allow-Headers": "Content-Type", // Allowed headers
  });

  // Handle the preflight request (OPTIONS method)
  if (req.method === "OPTIONS") {
    return new Response(null, { headers });
  }

  // Proceed with the main logic for POST request
  try {
    const { query } = await req.json();
    const apiKey = Deno.env.get("OPENAI_API_KEY");
    const openai = new OpenAI({
      apiKey: apiKey,
    });

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-4",
      stream: false,
    });

    const reply = chatCompletion.choices[0].message.content;

    return new Response(reply, {
      headers,
    });
  } catch (error) {
    return new Response("Error processing the request", {
      status: 500,
      headers,
    });
  }
});

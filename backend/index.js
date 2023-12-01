const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const { openai } = require("openai");

const apiKey = YOUR_OWN_OPENAI_API_KEY;

app.use(bodyParser.json());
app.use(cors());

app.post("/api/text-to-audio-file", async (req, res) => {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: req.body.text,
    max_tokens: 100,
    temperature: 0.5,
    apiKey: apiKey,
  });

  let num = (Math.random() * 100000000).toFixed(0);

  setTimeout(() => {
    res.status(200).json(num);
  }, 4500);
});

app.listen(4001, () => {
  console.log(`Server is ready at http://localhost:4001`);
});

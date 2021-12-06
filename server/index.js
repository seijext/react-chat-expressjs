// server/index.js

const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const got = require("got");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/meme", async (req, res) => {
    const { body } = await got("https://evergene.io/api/memes", {
        headers: {
            json: true,
        },
    });
    const { url } = JSON.parse(body);
    res.json({ url: url });
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

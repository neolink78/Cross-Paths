require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express()

app.use(express.json());

const port = process.env.APP_PORT ?? 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

// ici on va call les différents fichier faisant les appels sql, commme ci-dessous
const people = require("./people")



app.get('/people', people.getPeople);


app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.info(`Server is listening on ${port}`);
  }
});

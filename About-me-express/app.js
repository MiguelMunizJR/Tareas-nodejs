const express = require("express");

const app = express();

app.get("/me", (req, res) => {
  res.status(200).json({
    name: "Miguel Muñiz Bañuelos",
    age: 22,
    country: "Mexico",
    verb: req.method,
  });
});

app.post("/metas", (req, res) => {
  res.status(200).json({
    hobbies: ["programar", "Jugar futbol", "Crear musica"],
    verb: req.method,
  });
});

app.patch("/metas", (req, res) => {
  res.status(200).json({
    goals: ["Ser un gran programador", "Aprender ingles", "Superarme cada dia"],
    verb: req.method,
  });
});

app.put("/business", (req, res) => {
  res.status(200).json({
    companys: ["Netflix", "Meta", "Global"],
    verb: req.method,
  });
});

app.listen(8050, () => {
  console.log("server started at port 8050");
});

//modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//routes
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const partyRouter = require("./routes/partyRoutes");

//middleware

//config
const dbName = "partytimeb";
const port = 3000;

const app= express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/party", partyRouter);
//atrelar as rotas no express  

//conexão mongodb
mongoose.connect(
    `mongodb://localhost/${dbName}`,
);

app.get('/', (req,res) => {
    res.json({message: "Rota estabelecida!"})
});

app.listen(port, () =>{
    console.log(`O backend esta rodando na porta ${port}`);
});
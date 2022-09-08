const jwt = require("jsonwebtoken");

//middleware to validade user
const checkToken = (req,res,next) => {
    const token = req.header("auth-token");
    if(!token) {
        return res.status(401).json({error: "Acesso negado"});
    }

    try {
        const verified = jwt.verify(token, "nossosecret");
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({error: "O token é inválido"});
    }
}

module.exports = checkToken;
require("dotenv").config();
let serverPort = process.env.PORT || 3001;
let dbURL =
  "mongodb+srv://ar7:12345@cluster0.1g8wuka.mongodb.net/pentagon_packaging?retryWrites=true&w=majority";
let jwtSecretKey = "WeaponizeAR7$Hmm";
module.exports = { serverPort, dbURL, jwtSecretKey };

const app = require("./app");

const dotenv = require("dotenv");

const connectDatabase = require("./config/db");
require("colors");

// handling Uncaught error 
process.on("Uncaught error", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the Server due to uncaught error");
    process.exit(1);
})

//config

dotenv.config({ path: "backend/config/config.env" });

//connecting to database

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`app works! on https://localhost:${process.env.PORT}`.bgBlack);
});

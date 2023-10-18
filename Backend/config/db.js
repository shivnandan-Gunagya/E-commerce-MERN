const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.Db_Url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log('mongo db connected'.rainbow);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDb

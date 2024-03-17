const mongoose = require("mongoose");

exports.connectDatabase = () => {
<<<<<<< HEAD
    mongoose.connect(process.env.MONGO_URI)
    .then(con => console.log(`Database Conntected: ${con.connection.host}`))
=======
    mongoose.connect(process.env.MONGO_URI).then((con) => console.log(`Database Connected: ${con.connection.host}`))
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
    .catch((err) => console.log(err));
};
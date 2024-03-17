const app = require("./app");
const { connectDatabase } = require("./config/database");

connectDatabase();

<<<<<<< HEAD

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});
=======
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
})
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689

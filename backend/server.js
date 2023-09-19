import express from "express";

const app = express();

const port = process.env.PORT;

// Backend template to serv posts from MongoDB

app.listen(port, () => {
    console.log(`Server has been successfully started on port ${port}`);
});
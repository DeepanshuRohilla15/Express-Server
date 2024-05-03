import express from "express";

const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log("Request Method: ", req.method);
    next();
});

app.get("/", (req, res) =>  {
    res.send("Hello, Sir !")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})
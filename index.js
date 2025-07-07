import express from "express";
import axios from "axios";

const app=  express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Programming");
    const joke = response.data;
    res.render("index", { joke });
  } catch (error) {
    console.error("Error fetching joke:", error.message);
    res.send("Unable to fetch a joke. Try again later.");
  }
});
app.listen(port,()=>{
    console.log(`server running on port${port} `)
});
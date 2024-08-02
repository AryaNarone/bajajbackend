const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json(extended = true));
app.use(cors());

app.get("/bfhl", (req, res)=>{
    res.status(200);
    res.json({
        "operation_code": 1
    });
});


app.post("/bfhl",(req, res) =>{
    const { data } = req.body;
  const user_id = "AryaNarone_02012003";
  const email = "an0631@srmist.edu.in";
  const roll_number = "RA2111051010053";

console.log(data);

  let numbers = [];
  let alphabets = [];

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else {
      alphabets.push(item);
    }
  });

  alphabets.sort((a, b) =>
    b.localeCompare(a, undefined, { sensitivity: "base" })
  );
  const highest_alphabet = alphabets.length > 0 ? [alphabets[0]] : [];

  res.json({
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_alphabet,
  });

});

const server = http.createServer((req, res) => {
    
    res.end();
});


app.listen(3000, () => console.log("Server listening on port 3000"));
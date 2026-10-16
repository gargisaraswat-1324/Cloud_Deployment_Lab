const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/",(req,res) =>{
    res.send(`<DOCTYPE html>
    <html lang ="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <title>Cloud Development Lab</title>
            <style>
            font-family: Arial, sans-serif;
          text-align: center;
          padding: 80px 20px;
          background: #f0f4f8;
          color: #1f2937;
        }
        .card {
          max-width: 550px;
          margin: auto;
          padding: 35px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 5px 20px #00000015;
        }
        h1 { color: #2563eb; }
        .version { color: #059669; font-weight: bold; }
            </style>
                    
        </head>
        <body>
        <div class = "card">

            <h1>Welcome to my Cloud Application!</h1>
            <p> Developed by : Gargi Saraswat</p>
            <p> Application Version : <span class="version">1.0.0</span></p>
            <p> Deployed using : Node.js,Docker, and AWS EC2.</p>
        </body>
    </html>`);
})

app.listen(PORT, "0.0.0.0" , () =>{
    console.log(`Server is running on port ${PORT}`);
})